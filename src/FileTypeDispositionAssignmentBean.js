const FileDownloadBehavior = require('./FileDownloadBehavior');
const FileType = require('./FileType');

module.exports = (object, asChild) => {
  var rootTagStart = '<FileTypeDispositionAssignmentBean>';
  var rootTagEnd = '</FileTypeDispositionAssignmentBean>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.behavior == null ? '' : '<behavior>' + FileDownloadBehavior(object.behavior, true) + '</behavior>'}
	${object.fileType == null ? '' : '<fileType>' + FileType(object.fileType, true) + '</fileType>'}
	${object.securityRiskFileType == null ? '' : '<securityRiskFileType>' + object.securityRiskFileType + '</securityRiskFileType>'}
${rootTagEnd}`;
}