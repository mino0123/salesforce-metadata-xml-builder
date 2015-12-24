const Package = require('./Package');

module.exports = (object, asChild) => {
  var rootTagStart = '<RetrieveRequest>';
  var rootTagEnd = '</RetrieveRequest>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.apiVersion == null ? '' : '<apiVersion>' + object.apiVersion + '</apiVersion>'}
	${object.packageNames == null ? '' : object.packageNames.map(p => '<packageNames>' + p + '</packageNames>').join('')}
	${object.singlePackage == null ? '' : '<singlePackage>' + object.singlePackage + '</singlePackage>'}
	${object.specificFiles == null ? '' : object.specificFiles.map(p => '<specificFiles>' + p + '</specificFiles>').join('')}
	${object.unpackaged == null ? '' : '<unpackaged>' + Package(object.unpackaged, true) + '</unpackaged>'}
${rootTagEnd}`;
}