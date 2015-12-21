const SensitiveDataActionType = require('./SensitiveDataActionType');

module.exports = (object, asChild) => {
  var rootTagStart = '<LiveChatSensitiveDataRule>';
  var rootTagEnd = '</LiveChatSensitiveDataRule>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.actionType == null ? '' : '<actionType>' + SensitiveDataActionType(object.actionType, true) + '</actionType>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.enforceOn == null ? '' : '<enforceOn>' + object.enforceOn + '</enforceOn>'}
	${object.isEnabled == null ? '' : '<isEnabled>' + object.isEnabled + '</isEnabled>'}
	${object.pattern == null ? '' : '<pattern>' + object.pattern + '</pattern>'}
	${object.replacement == null ? '' : '<replacement>' + object.replacement + '</replacement>'}
${rootTagEnd}`;
}