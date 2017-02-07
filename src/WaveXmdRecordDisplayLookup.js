
module.exports = (object, asChild) => {
  var rootTagStart = '<WaveXmdRecordDisplayLookup>';
  var rootTagEnd = '</WaveXmdRecordDisplayLookup>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.recordDisplayField == null ? '' : '<recordDisplayField>' + object.recordDisplayField + '</recordDisplayField>'}
${rootTagEnd}`;
}