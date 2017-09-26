const FileTypeDispositionAssignmentBean = require('./FileTypeDispositionAssignmentBean');

module.exports = (object, asChild) => {
  var rootTagStart = '<FileUploadAndDownloadSecuritySettings>';
  var rootTagEnd = '</FileUploadAndDownloadSecuritySettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.dispositions == null ? '' : object.dispositions.map(p => '<dispositions>' + FileTypeDispositionAssignmentBean(p, true) + '</dispositions>').join('')}
	${object.noHtmlUploadAsAttachment == null ? '' : '<noHtmlUploadAsAttachment>' + object.noHtmlUploadAsAttachment + '</noHtmlUploadAsAttachment>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}