#!/usr/bin/env node

const shell = require('shelljs');
const utils = require('./utils');

utils.validateSetup();

function buildClient(callback) {
	const task = 'Build';
	utils.defaultMessage(task, 'Building client');
	shell.cd('client');
	shell.exec('npm run build', (code, stdout, stderr) => {
		shell.echo(stdout);
		if (code !== 0) {
			shell.echo(stderr);
			utils.errorMessage(task, 'Fail to build');
			utils.defaultErrorMessageInstruct('build-client');
		} else {
            utils.successMessage(task, null ,'Web client was build successfuly');
            callback();
		}
	});
	shell.cd('..');
}

function upContainers() {
	const task = 'Containers';
	utils.defaultMessage(task, 'Containers up');
	shell.exec('docker-compose up -d', (code, stdout, stderr) => {
		shell.echo(stdout);
		if (code !== 0) {
			shell.echo(stderr);
			utils.errorMessage(task, 'Conainer failed');
			utils.defaultErrorMessageInstruct('docker');
		} else {
			utils.successMessage(task, null, 'Conainter are alive, to access: http://localhost');
		}
	});
}

buildClient(upContainers);
