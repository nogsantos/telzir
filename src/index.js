const compiler = require('marko/compiler');
/**
 * To run with tests
 */
module.exports = {
	process(src, filepath) {
		const compiledSrc = compiler.compileFile(filepath);
		return compiledSrc;
	}
};
