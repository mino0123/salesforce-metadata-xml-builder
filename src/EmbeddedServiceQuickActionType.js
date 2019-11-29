module.exports = (value) => {
  if (!value) { return ''; }
  if (["Prechat","OfflineCase"].indexOf(value) < 0) {
    throw new Error('Invalid EmbeddedServiceQuickActionType value: ' + value);
  }
  return value;
};