
module.exports = (object, asChild) => {
  var rootTagStart = '<WaveXmdFormattingBin>';
  var rootTagEnd = '</WaveXmdFormattingBin>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.bin == null ? '' : '<bin>' + object.bin + '</bin>'}
	${object.formatValue == null ? '' : '<formatValue>' + object.formatValue + '</formatValue>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.sortIndex == null ? '' : '<sortIndex>' + object.sortIndex + '</sortIndex>'}
${rootTagEnd}`;
}