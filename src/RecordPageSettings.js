
module.exports = (object, asChild) => {
  var rootTagStart = '<RecordPageSettings>';
  var rootTagEnd = '</RecordPageSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableActivityRelatedList == null ? '' : '<enableActivityRelatedList>' + object.enableActivityRelatedList + '</enableActivityRelatedList>'}
	${object.enableFullRecordView == null ? '' : '<enableFullRecordView>' + object.enableFullRecordView + '</enableFullRecordView>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}