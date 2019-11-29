const ActionPlanTemplateItemValue = require('./ActionPlanTemplateItemValue');

module.exports = (object, asChild) => {
  var rootTagStart = '<ActionPlanTemplateItem>';
  var rootTagEnd = '</ActionPlanTemplateItem>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.actionPlanTemplateItemValue == null ? '' : object.actionPlanTemplateItemValue.map(p => '<actionPlanTemplateItemValue>' + ActionPlanTemplateItemValue(p, true) + '</actionPlanTemplateItemValue>').join('')}
	${object.displayOrder == null ? '' : '<displayOrder>' + object.displayOrder + '</displayOrder>'}
	${object.isRequired == null ? '' : '<isRequired>' + object.isRequired + '</isRequired>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.uniqueName == null ? '' : '<uniqueName>' + object.uniqueName + '</uniqueName>'}
${rootTagEnd}`;
}