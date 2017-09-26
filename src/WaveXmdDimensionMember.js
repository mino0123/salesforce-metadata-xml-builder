
module.exports = (object, asChild) => {
  var rootTagStart = '<WaveXmdDimensionMember>';
  var rootTagEnd = '</WaveXmdDimensionMember>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.color == null ? '' : '<color>' + object.color + '</color>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.member == null ? '' : '<member>' + object.member + '</member>'}
	${object.sortIndex == null ? '' : '<sortIndex>' + object.sortIndex + '</sortIndex>'}
${rootTagEnd}`;
}