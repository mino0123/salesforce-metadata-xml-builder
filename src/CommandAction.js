const CommandActionIntent = require('./CommandActionIntent');
const CommandActionParam = require('./CommandActionParam');
const CommandActionResponse = require('./CommandActionResponse');

module.exports = (object, asChild) => {
  var rootTagStart = '<CommandAction>';
  var rootTagEnd = '</CommandAction>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.actionType == null ? '' : '<actionType>' + object.actionType + '</actionType>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.intents == null ? '' : object.intents.map(p => '<intents>' + CommandActionIntent(p, true) + '</intents>').join('')}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.parameters == null ? '' : object.parameters.map(p => '<parameters>' + CommandActionParam(p, true) + '</parameters>').join('')}
	${object.responseTemplates == null ? '' : object.responseTemplates.map(p => '<responseTemplates>' + CommandActionResponse(p, true) + '</responseTemplates>').join('')}
	${object.target == null ? '' : '<target>' + object.target + '</target>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}