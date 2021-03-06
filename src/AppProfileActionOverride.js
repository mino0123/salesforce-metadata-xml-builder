const FormFactor = require('./FormFactor');
const ActionOverrideType = require('./ActionOverrideType');

module.exports = (object, asChild) => {
  var rootTagStart = '<AppProfileActionOverride>';
  var rootTagEnd = '</AppProfileActionOverride>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.profile == null ? '' : '<profile>' + object.profile + '</profile>'}
	${object.actionName == null ? '' : '<actionName>' + object.actionName + '</actionName>'}
	${object.content == null ? '' : '<content>' + object.content + '</content>'}
	${object.formFactor == null ? '' : '<formFactor>' + FormFactor(object.formFactor, true) + '</formFactor>'}
	${object.pageOrSobjectType == null ? '' : '<pageOrSobjectType>' + object.pageOrSobjectType + '</pageOrSobjectType>'}
	${object.recordType == null ? '' : '<recordType>' + object.recordType + '</recordType>'}
	${object.type == null ? '' : '<type>' + ActionOverrideType(object.type, true) + '</type>'}
${rootTagEnd}`;
}