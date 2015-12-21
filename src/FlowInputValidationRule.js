
module.exports = (object, asChild) => {
  var rootTagStart = '<FlowInputValidationRule>';
  var rootTagEnd = '</FlowInputValidationRule>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.errorMessage == null ? '' : '<errorMessage>' + object.errorMessage + '</errorMessage>'}
	${object.formulaExpression == null ? '' : '<formulaExpression>' + object.formulaExpression + '</formulaExpression>'}
${rootTagEnd}`;
}