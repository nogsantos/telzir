#!/usr/bin/env node

const shell = require('shelljs');
const utils = require('./utils');

utils.validateSetup();

function testApi() {
	const task = 'Api Test';
	utils.defaultMessage(task, 'Testing api');
	shell.cd('api');
	shell.exec('npm test --watch=false', (code, stdout, stderr) => {
		shell.echo(stdout);
		if (code !== 0) {
			shell.echo(stderr);
			utils.errorMessage(task, 'Fail test api');
		} else {
			utils.successMessage(task, null, 'API test success');
		}
	});
	shell.cd('..');
}

testApi();
