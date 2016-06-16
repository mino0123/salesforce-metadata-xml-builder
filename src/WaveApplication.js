const FolderShare = require('./FolderShare');

module.exports = (object, asChild) => {
  var rootTagStart = '<WaveApplication>';
  var rootTagEnd = '</WaveApplication>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.assetIcon == null ? '' : '<assetIcon>' + object.assetIcon + '</assetIcon>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.folder == null ? '' : '<folder>' + object.folder + '</folder>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.shares == null ? '' : object.shares.map(p => '<shares>' + FolderShare(p, true) + '</shares>').join('')}
	${object.templateOrigin == null ? '' : '<templateOrigin>' + object.templateOrigin + '</templateOrigin>'}
	${object.templateVersion == null ? '' : '<templateVersion>' + object.templateVersion + '</templateVersion>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}