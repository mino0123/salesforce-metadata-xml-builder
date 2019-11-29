const StrategyNodeInvocableActionArg = require('./StrategyNodeInvocableActionArg');
const InvocableActionType = require('./InvocableActionType');

module.exports = (object, asChild) => {
  var rootTagStart = '<StrategyNodeInvocableAction>';
  var rootTagEnd = '</StrategyNodeInvocableAction>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.action == null ? '' : '<action>' + object.action + '</action>'}
	${object.argument == null ? '' : object.argument.map(p => '<argument>' + StrategyNodeInvocableActionArg(p, true) + '</argument>').join('')}
	${object.isGenerator == null ? '' : '<isGenerator>' + object.isGenerator + '</isGenerator>'}
	${object.type == null ? '' : '<type>' + InvocableActionType(object.type, true) + '</type>'}
	${object.limit == null ? '' : '<limit>' + object.limit + '</limit>'}
	${object.childNode == null ? '' : object.childNode.map(p => '<childNode>' + p + '</childNode>').join('')}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
${rootTagEnd}`;
}