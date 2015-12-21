module.exports = (value) => {
  if (!value) { return ''; }
  if (["Minutes","Hours","Days"].indexOf(value) < 0) {
    throw new Error('Invalid MilestoneTimeUnits value: ' + value);
  }
  return value;
};