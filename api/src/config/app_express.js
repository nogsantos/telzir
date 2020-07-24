const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const product = require('@routes/product');
const promotions = require('@routes/promotions');
const briefing = require('@routes/briefing');
/**
 * Enable All CORS Requests
 */
app.use(cors());

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
app.use('/product/promotion', promotions);
app.use('/briefing', briefing);

/**
 * Database connector
 */
const dotenv = require('dotenv');
const result = dotenv.config({ debug: process.env.DEBUG });

if (result.error) {
	console.error('LOG: result.error', result.error);
}

const conn = `${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DATABASE}`;
require('./database')(`mongodb://${conn}`);

module.exports = app;
