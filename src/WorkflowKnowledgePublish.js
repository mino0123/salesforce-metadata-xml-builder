const KnowledgeWorkflowAction = require('./KnowledgeWorkflowAction');

module.exports = (object, asChild) => {
  var rootTagStart = '<WorkflowKnowledgePublish>';
  var rootTagEnd = '</WorkflowKnowledgePublish>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.action == null ? '' : '<action>' + KnowledgeWorkflowAction(object.action, true) + '</action>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.language == null ? '' : '<language>' + object.language + '</language>'}
	${object.protected == null ? '' : '<protected>' + object.protected + '</protected>'}
${rootTagEnd}`;
}