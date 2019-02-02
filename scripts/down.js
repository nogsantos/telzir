#!/usr/bin/env node

const shell = require('shelljs');
const utils = require('./utils');

function turnOffContainers() {
	const task = 'Containers';
	utils.defaultMessage(task, 'Containers turn off');
	shell.exec('docker-compose down', (code, stdout, stderr) => {
		shell.echo(stdout);
		if (code !== 0) {
			shell.echo(stderr);
			utils.errorMessage(task, 'Conainer failed');
			utils.defaultErrorMessageInstruct('docker');
		} else {
			utils.successMessage(task, null, 'they were finalized');
		}
	});
}

turnOffContainers();
