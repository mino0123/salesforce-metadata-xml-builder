const WorkflowAlert = require('./WorkflowAlert');
const WorkflowFieldUpdate = require('./WorkflowFieldUpdate');
const WorkflowFlowAction = require('./WorkflowFlowAction');
const WorkflowKnowledgePublish = require('./WorkflowKnowledgePublish');
const WorkflowOutboundMessage = require('./WorkflowOutboundMessage');
const WorkflowRule = require('./WorkflowRule');
const WorkflowSend = require('./WorkflowSend');
const WorkflowTask = require('./WorkflowTask');

module.exports = (object, asChild) => {
  var rootTagStart = '<Workflow>';
  var rootTagEnd = '</Workflow>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.alerts == null ? '' : object.alerts.map(p => '<alerts>' + WorkflowAlert(p, true) + '</alerts>')}
	${object.fieldUpdates == null ? '' : object.fieldUpdates.map(p => '<fieldUpdates>' + WorkflowFieldUpdate(p, true) + '</fieldUpdates>')}
	${object.flowActions == null ? '' : object.flowActions.map(p => '<flowActions>' + WorkflowFlowAction(p, true) + '</flowActions>')}
	${object.knowledgePublishes == null ? '' : object.knowledgePublishes.map(p => '<knowledgePublishes>' + WorkflowKnowledgePublish(p, true) + '</knowledgePublishes>')}
	${object.outboundMessages == null ? '' : object.outboundMessages.map(p => '<outboundMessages>' + WorkflowOutboundMessage(p, true) + '</outboundMessages>')}
	${object.rules == null ? '' : object.rules.map(p => '<rules>' + WorkflowRule(p, true) + '</rules>')}
	${object.send == null ? '' : object.send.map(p => '<send>' + WorkflowSend(p, true) + '</send>')}
	${object.tasks == null ? '' : object.tasks.map(p => '<tasks>' + WorkflowTask(p, true) + '</tasks>')}
${rootTagEnd}`;
}