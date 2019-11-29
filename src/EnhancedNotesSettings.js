
module.exports = (object, asChild) => {
  var rootTagStart = '<EnhancedNotesSettings>';
  var rootTagEnd = '</EnhancedNotesSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableEnhancedNotes == null ? '' : '<enableEnhancedNotes>' + object.enableEnhancedNotes + '</enableEnhancedNotes>'}
	${object.enableTasksOnEnhancedNotes == null ? '' : '<enableTasksOnEnhancedNotes>' + object.enableTasksOnEnhancedNotes + '</enableTasksOnEnhancedNotes>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}