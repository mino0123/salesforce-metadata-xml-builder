module.exports = (value) => {
  if (!value) { return ''; }
  if (["NoTestRun","RunSpecifiedTests","RunLocalTests","RunAllTestsInOrg"].indexOf(value) < 0) {
    throw new Error('Invalid TestLevel value: ' + value);
  }
  return value;
};