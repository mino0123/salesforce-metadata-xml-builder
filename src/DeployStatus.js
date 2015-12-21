module.exports = (value) => {
  if (!value) { return ''; }
  if (["Pending","InProgress","Succeeded","SucceededPartial","Failed","Canceling","Canceled"].indexOf(value) < 0) {
    throw new Error('Invalid DeployStatus value: ' + value);
  }
  return value;
};