const StrategyActionArg = require('./StrategyActionArg');
const InvocableActionType = require('./InvocableActionType');

module.exports = (object, asChild) => {
  var rootTagStart = '<StrategyAction>';
  var rootTagEnd = '</StrategyAction>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.action == null ? '' : '<action>' + object.action + '</action>'}
	${object.argument == null ? '' : object.argument.map(p => '<argument>' + StrategyActionArg(p, true) + '</argument>').join('')}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.type == null ? '' : '<type>' + InvocableActionType(object.type, true) + '</type>'}
${rootTagEnd}`;
}