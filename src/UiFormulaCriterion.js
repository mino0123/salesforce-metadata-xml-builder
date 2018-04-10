
module.exports = (object, asChild) => {
  var rootTagStart = '<UiFormulaCriterion>';
  var rootTagEnd = '</UiFormulaCriterion>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.leftValue == null ? '' : '<leftValue>' + object.leftValue + '</leftValue>'}
	${object.operator == null ? '' : '<operator>' + object.operator + '</operator>'}
	${object.rightValue == null ? '' : '<rightValue>' + object.rightValue + '</rightValue>'}
${rootTagEnd}`;
}