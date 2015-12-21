const CodeCoverageResult = require('./CodeCoverageResult');
const CodeCoverageWarning = require('./CodeCoverageWarning');
const RunTestFailure = require('./RunTestFailure');
const RunTestSuccess = require('./RunTestSuccess');

module.exports = (object, asChild) => {
  var rootTagStart = '<RunTestsResult>';
  var rootTagEnd = '</RunTestsResult>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.apexLogId == null ? '' : '<apexLogId>' + object.apexLogId + '</apexLogId>'}
	${object.codeCoverage == null ? '' : object.codeCoverage.map(p => '<codeCoverage>' + CodeCoverageResult(p, true) + '</codeCoverage>')}
	${object.codeCoverageWarnings == null ? '' : object.codeCoverageWarnings.map(p => '<codeCoverageWarnings>' + CodeCoverageWarning(p, true) + '</codeCoverageWarnings>')}
	${object.failures == null ? '' : object.failures.map(p => '<failures>' + RunTestFailure(p, true) + '</failures>')}
	${object.numFailures == null ? '' : '<numFailures>' + object.numFailures + '</numFailures>'}
	${object.numTestsRun == null ? '' : '<numTestsRun>' + object.numTestsRun + '</numTestsRun>'}
	${object.successes == null ? '' : object.successes.map(p => '<successes>' + RunTestSuccess(p, true) + '</successes>')}
	${object.totalTime == null ? '' : '<totalTime>' + object.totalTime + '</totalTime>'}
${rootTagEnd}`;
}