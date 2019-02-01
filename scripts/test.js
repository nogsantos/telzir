#!/usr/bin/env node

const shell = require('shelljs');
const utils = require('./utils');

utils.validateSetup();

function testApi() {
	const task = 'Test';
	utils.defaultMessage(task, 'Testing api');
	shell.cd('api');
	shell.exec('npm test', (code, stdout, stderr) => {
		shell.echo(stdout);
		if (code !== 0) {
			shell.echo(stderr);
			utils.errorMessage(task, 'Fail');
		} else {
			utils.successMessage(task, 'API');
		}
	});
	shell.cd('..');
}

testApi();
