module.exports = (value) => {
  if (!value) { return ''; }
  if (["PublishAsNew","Publish"].indexOf(value) < 0) {
    throw new Error('Invalid KnowledgeWorkflowAction value: ' + value);
  }
  return value;
};