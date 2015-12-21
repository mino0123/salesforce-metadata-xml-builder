module.exports = (value) => {
  if (!value) { return ''; }
  if (["none","recursIndependently","recursChained"].indexOf(value) < 0) {
    throw new Error('Invalid MilestoneTypeRecurrenceType value: ' + value);
  }
  return value;
};