const DeployDetails = require('./DeployDetails');
const StatusCode = require('./StatusCode');
const ID = require('./ID');
const DeployStatus = require('./DeployStatus');

module.exports = (object, asChild) => {
  var rootTagStart = '<DeployResult>';
  var rootTagEnd = '</DeployResult>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.canceledBy == null ? '' : '<canceledBy>' + object.canceledBy + '</canceledBy>'}
	${object.canceledByName == null ? '' : '<canceledByName>' + object.canceledByName + '</canceledByName>'}
	${object.checkOnly == null ? '' : '<checkOnly>' + object.checkOnly + '</checkOnly>'}
	${object.completedDate == null ? '' : '<completedDate>' + object.completedDate + '</completedDate>'}
	${object.createdBy == null ? '' : '<createdBy>' + object.createdBy + '</createdBy>'}
	${object.createdByName == null ? '' : '<createdByName>' + object.createdByName + '</createdByName>'}
	${object.createdDate == null ? '' : '<createdDate>' + object.createdDate + '</createdDate>'}
	${object.details == null ? '' : '<details>' + DeployDetails(object.details, true) + '</details>'}
	${object.done == null ? '' : '<done>' + object.done + '</done>'}
	${object.errorMessage == null ? '' : '<errorMessage>' + object.errorMessage + '</errorMessage>'}
	${object.errorStatusCode == null ? '' : '<errorStatusCode>' + StatusCode(object.errorStatusCode, true) + '</errorStatusCode>'}
	${object.id == null ? '' : '<id>' + ID(object.id, true) + '</id>'}
	${object.ignoreWarnings == null ? '' : '<ignoreWarnings>' + object.ignoreWarnings + '</ignoreWarnings>'}
	${object.lastModifiedDate == null ? '' : '<lastModifiedDate>' + object.lastModifiedDate + '</lastModifiedDate>'}
	${object.numberComponentErrors == null ? '' : '<numberComponentErrors>' + object.numberComponentErrors + '</numberComponentErrors>'}
	${object.numberComponentsDeployed == null ? '' : '<numberComponentsDeployed>' + object.numberComponentsDeployed + '</numberComponentsDeployed>'}
	${object.numberComponentsTotal == null ? '' : '<numberComponentsTotal>' + object.numberComponentsTotal + '</numberComponentsTotal>'}
	${object.numberTestErrors == null ? '' : '<numberTestErrors>' + object.numberTestErrors + '</numberTestErrors>'}
	${object.numberTestsCompleted == null ? '' : '<numberTestsCompleted>' + object.numberTestsCompleted + '</numberTestsCompleted>'}
	${object.numberTestsTotal == null ? '' : '<numberTestsTotal>' + object.numberTestsTotal + '</numberTestsTotal>'}
	${object.rollbackOnError == null ? '' : '<rollbackOnError>' + object.rollbackOnError + '</rollbackOnError>'}
	${object.runTestsEnabled == null ? '' : '<runTestsEnabled>' + object.runTestsEnabled + '</runTestsEnabled>'}
	${object.startDate == null ? '' : '<startDate>' + object.startDate + '</startDate>'}
	${object.stateDetail == null ? '' : '<stateDetail>' + object.stateDetail + '</stateDetail>'}
	${object.status == null ? '' : '<status>' + DeployStatus(object.status, true) + '</status>'}
	${object.success == null ? '' : '<success>' + object.success + '</success>'}
${rootTagEnd}`;
}