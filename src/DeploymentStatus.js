module.exports = (value) => {
  if (!value) { return ''; }
  if (["InDevelopment","Deployed"].indexOf(value) < 0) {
    throw new Error('Invalid DeploymentStatus value: ' + value);
  }
  return value;
};