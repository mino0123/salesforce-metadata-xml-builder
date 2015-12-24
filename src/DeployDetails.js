const DeployMessage = require('./DeployMessage');
const RetrieveResult = require('./RetrieveResult');
const RunTestsResult = require('./RunTestsResult');

module.exports = (object, asChild) => {
  var rootTagStart = '<DeployDetails>';
  var rootTagEnd = '</DeployDetails>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.componentFailures == null ? '' : object.componentFailures.map(p => '<componentFailures>' + DeployMessage(p, true) + '</componentFailures>').join('')}
	${object.componentSuccesses == null ? '' : object.componentSuccesses.map(p => '<componentSuccesses>' + DeployMessage(p, true) + '</componentSuccesses>').join('')}
	${object.retrieveResult == null ? '' : '<retrieveResult>' + RetrieveResult(object.retrieveResult, true) + '</retrieveResult>'}
	${object.runTestResult == null ? '' : '<runTestResult>' + RunTestsResult(object.runTestResult, true) + '</runTestResult>'}
${rootTagEnd}`;
}