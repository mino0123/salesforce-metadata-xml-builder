module.exports = (value) => {
  if (!value) { return ''; }
  if (["Bounce","Discard","Requeue"].indexOf(value) < 0) {
    throw new Error('Invalid EmailToCaseOnFailureActionType value: ' + value);
  }
  return value;
};