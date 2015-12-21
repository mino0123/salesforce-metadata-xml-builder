module.exports = (value) => {
  if (!value) { return ''; }
  if (["CaseCreation","CaseLastModified"].indexOf(value) < 0) {
    throw new Error('Invalid EscalationStartTimeType value: ' + value);
  }
  return value;
};