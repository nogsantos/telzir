#!/usr/bin/env node

const shell = require('shelljs');
const utils = require('./utils');

utils.validateSetup();

function testApi() {
	const task = 'Client Test';
	utils.defaultMessage(task, 'Testing client');
	shell.cd('client');
	shell.exec('npm run test -- --coverage', (code, stdout, stderr) => {
		shell.echo(stdout);
		if (code !== 0) {
			shell.echo(stderr);
			utils.errorMessage(task, 'Fail client tests');
		} else {
			utils.successMessage(task, null, 'Client test success');
		}
	});
	shell.cd('..');
}

testApi();
