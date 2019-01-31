require('module-alias/register');
const app = require('@config/app_express');

/**
 * Set default port
 */
const port = process.env.port || 3000;

/**
 * Start server
 */
app.listen(port, () => {
	console.log('Server initialiazed on port', port);
});
