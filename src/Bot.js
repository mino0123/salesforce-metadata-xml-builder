const LocalMlDomain = require('./LocalMlDomain');
const BotVersion = require('./BotVersion');
const ConversationContextVariable = require('./ConversationContextVariable');

module.exports = (object, asChild) => {
  var rootTagStart = '<Bot>';
  var rootTagEnd = '</Bot>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.botMlDomain == null ? '' : '<botMlDomain>' + LocalMlDomain(object.botMlDomain, true) + '</botMlDomain>'}
	${object.botUser == null ? '' : '<botUser>' + object.botUser + '</botUser>'}
	${object.botVersions == null ? '' : object.botVersions.map(p => '<botVersions>' + BotVersion(p, true) + '</botVersions>').join('')}
	${object.contextVariables == null ? '' : object.contextVariables.map(p => '<contextVariables>' + ConversationContextVariable(p, true) + '</contextVariables>').join('')}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}