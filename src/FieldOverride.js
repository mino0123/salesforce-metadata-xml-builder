
module.exports = (object, asChild) => {
  var rootTagStart = '<FieldOverride>';
  var rootTagEnd = '</FieldOverride>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.field == null ? '' : '<field>' + object.field + '</field>'}
	${object.formula == null ? '' : '<formula>' + object.formula + '</formula>'}
	${object.literalValue == null ? '' : '<literalValue>' + object.literalValue + '</literalValue>'}
${rootTagEnd}`;
}