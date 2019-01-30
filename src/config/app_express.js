require('marko/node-require').install();
require('marko/express');
require('marko/browser-refresh').enable();
require('lasso/browser-refresh').enable('*.marko *.css *.less *.styl *.scss *.sass *.png *.jpeg *.jpg *.gif *.webp *.svg');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const routes = require('@routes');

/**
 * Detect environment
 */
const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

/**
 * Configure lasso to control how JS/CSS/etc. is delivered to the browser
 */
let is_enabled_to_prod = env === 'production';
require('lasso').configure({
	plugins: ['lasso-marko'],
	outputDir: '../public',
	bundlingEnabled: is_enabled_to_prod,
	minify: is_enabled_to_prod,
	fingerprintsEnabled: is_enabled_to_prod
});

app.use(require('lasso/middleware').serveStatic());

/**
 * Middleware for body-parser
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use('*', (req, res, next) => {
	const start = new Date().getTime();
	next();
	const end = new Date().getTime();
	const timer = end - start;
	console.log('Request start', `${start}ms`);
	console.log('Request end', `${end}ms`);
	console.log('Request Timer', `${timer}ms`);
});

/**
 * Define routes
 */
app.use(routes);

/**
 * Load config by environment
 */
const config = require(`./config.${env}.json`);

/**
 * Database connector
 */
const dbconf = config.databaseConfig;
const conn = `${dbconf.user}:${dbconf.password}@${dbconf.host}:${dbconf.port}/${dbconf.database}`;
require('./database')(`mongodb://${conn}`);

module.exports = app;
