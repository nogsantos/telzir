#!/usr/bin/env node

const shell = require('shelljs');
const utils = require('./utils');

utils.validateSetup();

function runClient() {
	const task = 'Run';
	utils.defaultMessage(task, 'Running web client');
	shell.cd('client');
	shell.exec('npm start &', (code, stdout, stderr) => {
		shell.echo(stdout);
		if (code !== 0) {
			shell.echo(stderr);
			utils.errorMessage(task, 'Fail to run the client');
			utils.defaultErrorMessageInstruct('run-client');
		} else {
            utils.successMessage(task, null ,'Web client was running on http://localhost:3001');
		}
	});
	shell.cd('..');
}

function runApi(callback) {
	const task = 'Run';
	utils.defaultMessage(task, 'Running api');
	shell.cd('api');
	shell.exec('npm start  &', (code, stdout, stderr) => {
		shell.echo(stdout);
		if (code !== 0) {
			shell.echo(stderr);
			utils.errorMessage(task, 'Fail to run the client');
			utils.defaultErrorMessageInstruct('run-api');
		} else {
            utils.successMessage(task, null ,'Api was running on http://localhost:3000');
            callback();
		}
	});
	shell.cd('..');
}

runClient();
runApi();
