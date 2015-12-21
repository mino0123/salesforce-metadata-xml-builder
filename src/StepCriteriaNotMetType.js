module.exports = (value) => {
  if (!value) { return ''; }
  if (["ApproveRecord","RejectRecord","GotoNextStep"].indexOf(value) < 0) {
    throw new Error('Invalid StepCriteriaNotMetType value: ' + value);
  }
  return value;
};