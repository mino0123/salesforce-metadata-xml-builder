
module.exports = (object, asChild) => {
  var rootTagStart = '<ActionPlanTemplateItemValue>';
  var rootTagEnd = '</ActionPlanTemplateItemValue>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.valueFormula == null ? '' : '<valueFormula>' + object.valueFormula + '</valueFormula>'}
	${object.valueLiteral == null ? '' : '<valueLiteral>' + object.valueLiteral + '</valueLiteral>'}
${rootTagEnd}`;
}