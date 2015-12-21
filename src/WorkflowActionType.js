module.exports = (value) => {
  if (!value) { return ''; }
  if (["FieldUpdate","KnowledgePublish","Task","Alert","Send","OutboundMessage","FlowAction"].indexOf(value) < 0) {
    throw new Error('Invalid WorkflowActionType value: ' + value);
  }
  return value;
};