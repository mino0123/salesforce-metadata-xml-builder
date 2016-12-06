const FormFactor = require('./FormFactor');
const ActionOverrideType = require('./ActionOverrideType');

module.exports = (object, asChild) => {
  var rootTagStart = '<AppActionOverride>';
  var rootTagEnd = '</AppActionOverride>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.pageOrSobjectType == null ? '' : '<pageOrSobjectType>' + object.pageOrSobjectType + '</pageOrSobjectType>'}
	${object.actionName == null ? '' : '<actionName>' + object.actionName + '</actionName>'}
	${object.comment == null ? '' : '<comment>' + object.comment + '</comment>'}
	${object.content == null ? '' : '<content>' + object.content + '</content>'}
	${object.formFactor == null ? '' : '<formFactor>' + FormFactor(object.formFactor, true) + '</formFactor>'}
	${object.skipRecordTypeSelect == null ? '' : '<skipRecordTypeSelect>' + object.skipRecordTypeSelect + '</skipRecordTypeSelect>'}
	${object.type == null ? '' : '<type>' + ActionOverrideType(object.type, true) + '</type>'}
${rootTagEnd}`;
}