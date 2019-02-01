#!/usr/bin/env node

const shell = require('shelljs');
const colors = require('colors/safe');
const emoji = require('node-emoji')

exports.checkDirectory = dir => shell.test('-d', dir);

exports.validateSetup = () => {
    if (!this.checkDirectory('./api/node_modules') || !this.checkDirectory('./client/node_modules')) {
        this.errorMessage('Check system', `Before run ${colors.blue.italic('[$ npm run setup]')} then try to build again`);
        shell.exit();
    }
};

exports.defaultMessage = (task, target) => shell.echo(colors.cyan.bold(`-\t${emoji.get('clock9')} [${task}] ${target}...`));

exports.successMessage = (task, target, message) => {
    const title = 'Success';
    if (target) {
        shell.echo(colors.green.bold(`-\t${emoji.get('heavy_check_mark')}  ${title}: [${task}] All ${target} dependencies have been installed successfully!`));
    } else {
        shell.echo(colors.green.bold(`-\t${emoji.get('heavy_check_mark')}  ${title}: [${task}] ${message}`));
    }
}

exports.errorMessage = (task, target) => shell.echo(colors.red.bold(`-\t${emoji.get('x')} Fail: [${task}] ${target}`));

exports.defaultErrorMessageInstruct = (target) => shell.echo(colors.yellow(`
        Try to remove ${colors.bold('node_modules')} dir and ${colors.bold('package-lock.json')} file in ${target} dir and try to run the command again.\n
        If the problem persists, send an email to: ${colors.green.bold('nogsantos@gmail.com')}
    `));