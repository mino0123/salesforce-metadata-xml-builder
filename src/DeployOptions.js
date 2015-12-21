const TestLevel = require('./TestLevel');

module.exports = (object, asChild) => {
  var rootTagStart = '<DeployOptions>';
  var rootTagEnd = '</DeployOptions>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.allowMissingFiles == null ? '' : '<allowMissingFiles>' + object.allowMissingFiles + '</allowMissingFiles>'}
	${object.autoUpdatePackage == null ? '' : '<autoUpdatePackage>' + object.autoUpdatePackage + '</autoUpdatePackage>'}
	${object.checkOnly == null ? '' : '<checkOnly>' + object.checkOnly + '</checkOnly>'}
	${object.ignoreWarnings == null ? '' : '<ignoreWarnings>' + object.ignoreWarnings + '</ignoreWarnings>'}
	${object.performRetrieve == null ? '' : '<performRetrieve>' + object.performRetrieve + '</performRetrieve>'}
	${object.purgeOnDelete == null ? '' : '<purgeOnDelete>' + object.purgeOnDelete + '</purgeOnDelete>'}
	${object.rollbackOnError == null ? '' : '<rollbackOnError>' + object.rollbackOnError + '</rollbackOnError>'}
	${object.runTests == null ? '' : object.runTests.map(p => '<runTests>' + p + '</runTests>')}
	${object.singlePackage == null ? '' : '<singlePackage>' + object.singlePackage + '</singlePackage>'}
	${object.testLevel == null ? '' : '<testLevel>' + TestLevel(object.testLevel, true) + '</testLevel>'}
${rootTagEnd}`;
}