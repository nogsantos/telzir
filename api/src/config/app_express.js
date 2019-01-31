const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const product = require('@routes/product');
const promo = require('@routes/promo');
/**
 * Detect environment
 */
const env = process.env.NODE_ENV ? process.env.NODE_ENV : 'development';

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
app.use('/product', product);
app.use('/product/promo', promo);

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
