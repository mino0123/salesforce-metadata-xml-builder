const StatusCode = require('./StatusCode');
const FileProperties = require('./FileProperties');
const RetrieveMessage = require('./RetrieveMessage');
const RetrieveStatus = require('./RetrieveStatus');

module.exports = (object, asChild) => {
  var rootTagStart = '<RetrieveResult>';
  var rootTagEnd = '</RetrieveResult>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.done == null ? '' : '<done>' + object.done + '</done>'}
	${object.errorMessage == null ? '' : '<errorMessage>' + object.errorMessage + '</errorMessage>'}
	${object.errorStatusCode == null ? '' : '<errorStatusCode>' + StatusCode(object.errorStatusCode, true) + '</errorStatusCode>'}
	${object.fileProperties == null ? '' : object.fileProperties.map(p => '<fileProperties>' + FileProperties(p, true) + '</fileProperties>')}
	${object.id == null ? '' : '<id>' + object.id + '</id>'}
	${object.messages == null ? '' : object.messages.map(p => '<messages>' + RetrieveMessage(p, true) + '</messages>')}
	${object.status == null ? '' : '<status>' + RetrieveStatus(object.status, true) + '</status>'}
	${object.success == null ? '' : '<success>' + object.success + '</success>'}
	${object.zipFile == null ? '' : '<zipFile>' + object.zipFile + '</zipFile>'}
${rootTagEnd}`;
}