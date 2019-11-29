module.exports = (value) => {
  if (!value) { return ''; }
  if (["Assign","Add","Subtract","AddItem","RemoveFirst","RemoveBeforeFirst","RemoveAfterFirst","RemoveAll","AddAtStart","RemoveUncommon","AssignCount","RemovePosition"].indexOf(value) < 0) {
    throw new Error('Invalid FlowAssignmentOperator value: ' + value);
  }
  return value;
};