module.exports = (value) => {
  if (!value) { return ''; }
  if (["Hours","Days"].indexOf(value) < 0) {
    throw new Error('Invalid WorkflowTimeUnits value: ' + value);
  }
  return value;
};