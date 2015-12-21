module.exports = (value) => {
  if (!value) { return ''; }
  if (["QuickAction","StandardButton","CustomButton","ProductivityAction","ActionLink","InvocableAction"].indexOf(value) < 0) {
    throw new Error('Invalid PlatformActionType value: ' + value);
  }
  return value;
};