const ActionPlanTemplateItem = require('./ActionPlanTemplateItem');

module.exports = (object, asChild) => {
  var rootTagStart = '<ActionPlanTemplate>';
  var rootTagEnd = '</ActionPlanTemplate>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.actionPlanTemplateItem == null ? '' : object.actionPlanTemplateItem.map(p => '<actionPlanTemplateItem>' + ActionPlanTemplateItem(p, true) + '</actionPlanTemplateItem>').join('')}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.targetEntityType == null ? '' : '<targetEntityType>' + object.targetEntityType + '</targetEntityType>'}
	${object.uniqueName == null ? '' : '<uniqueName>' + object.uniqueName + '</uniqueName>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}