const UiFormulaCriterion = require('./UiFormulaCriterion');

module.exports = (object, asChild) => {
  var rootTagStart = '<UiFormulaRule>';
  var rootTagEnd = '</UiFormulaRule>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.booleanFilter == null ? '' : '<booleanFilter>' + object.booleanFilter + '</booleanFilter>'}
	${object.criteria == null ? '' : object.criteria.map(p => '<criteria>' + UiFormulaCriterion(p, true) + '</criteria>').join('')}
${rootTagEnd}`;
}