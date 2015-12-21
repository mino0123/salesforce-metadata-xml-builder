module.exports = (value) => {
  if (!value) { return ''; }
  if (["Warning","Error"].indexOf(value) < 0) {
    throw new Error('Invalid DeployProblemType value: ' + value);
  }
  return value;
};