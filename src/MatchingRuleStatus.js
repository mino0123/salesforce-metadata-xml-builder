module.exports = (value) => {
  if (!value) { return ''; }
  if (["Inactive","DeactivationFailed","Activating","Deactivating","Active","ActivationFailed"].indexOf(value) < 0) {
    throw new Error('Invalid MatchingRuleStatus value: ' + value);
  }
  return value;
};