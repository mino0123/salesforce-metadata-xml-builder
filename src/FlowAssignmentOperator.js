module.exports = (value) => {
  if (!value) { return ''; }
  if (["Assign","Add","Subtract","AddItem"].indexOf(value) < 0) {
    throw new Error('Invalid FlowAssignmentOperator value: ' + value);
  }
  return value;
};