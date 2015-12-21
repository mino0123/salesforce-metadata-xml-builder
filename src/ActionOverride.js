const ActionOverrideType = require('./ActionOverrideType');

module.exports = (object, asChild) => {
  var rootTagStart = '<ActionOverride>';
  var rootTagEnd = '</ActionOverride>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.actionName == null ? '' : '<actionName>' + object.actionName + '</actionName>'}
	${object.comment == null ? '' : '<comment>' + object.comment + '</comment>'}
	${object.content == null ? '' : '<content>' + object.content + '</content>'}
	${object.skipRecordTypeSelect == null ? '' : '<skipRecordTypeSelect>' + object.skipRecordTypeSelect + '</skipRecordTypeSelect>'}
	${object.type == null ? '' : '<type>' + ActionOverrideType(object.type, true) + '</type>'}
${rootTagEnd}`;
}