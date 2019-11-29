
module.exports = (object, asChild) => {
  var rootTagStart = '<ArchiveSettings>';
  var rootTagEnd = '</ArchiveSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableEntityArchivingEnabled == null ? '' : '<enableEntityArchivingEnabled>' + object.enableEntityArchivingEnabled + '</enableEntityArchivingEnabled>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}