#!/usr/bin/env node

const shell = require('shelljs');
const utils = require('./utils');
var _MIN_NODE_VERSION = 10;

function nodeVersionCheck() {
    const version = shell.exec('node --version', { silent: true }).stdout;
    if (version.match(/\d+/g)[0] < _MIN_NODE_VERSION) {
        utils.errorMessage('Check system', 'Recomend node version: >= 10');
        shell.exit(1);
    }
    utils.successMessage('Check system', null, `Node version ${version}`);
}

function setupApi() {
    const task = 'Setup';
    utils.defaultMessage(task, 'Setting up api dependencies');
    shell.cd('api');
    shell.exec('npm i', (code, stdout, stderr) => {
        shell.echo(stdout);
        if (code !== 0) {
            shell.echo(stderr);
            utils.errorMessage(task, 'Dependencies were not installed');
            utils.defaultErrorMessageInstruct('api');
        } else {
            utils.successMessage(task, 'API');
        }
    });
    shell.cd('..');
}

function setupClient() {
    const task = 'Setup';
    utils.defaultMessage(task, 'Setting up Client dependencies');
    shell.cd('client');
    shell.exec('npm i', (code, stdout, stderr) => {
        shell.echo(stdout);
        if (code !== 0) {
            shell.echo(stderr);
            utils.errorMessage(task, 'Dependencies were not installed');
            utils.defaultErrorMessageInstruct('client');
        } else {
            utils.successMessage(task, 'Client');
        }
    });
    shell.cd('..');
}

nodeVersionCheck();
setupApi();
setupClient();
