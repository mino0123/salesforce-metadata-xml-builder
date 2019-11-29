
module.exports = (object, asChild) => {
  var rootTagStart = '<WaveXmdFormattingPredicate>';
  var rootTagEnd = '</WaveXmdFormattingPredicate>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.formatValue == null ? '' : '<formatValue>' + object.formatValue + '</formatValue>'}
	${object.operator == null ? '' : '<operator>' + object.operator + '</operator>'}
	${object.sortIndex == null ? '' : '<sortIndex>' + object.sortIndex + '</sortIndex>'}
	${object.value == null ? '' : '<value>' + object.value + '</value>'}
${rootTagEnd}`;
}