module.exports = (value) => {
  if (!value) { return ''; }
  if (["CurrentUser","OrgWideEmailAddress","DefaultWorkflowUser"].indexOf(value) < 0) {
    throw new Error('Invalid ActionEmailSenderType value: ' + value);
  }
  return value;
};