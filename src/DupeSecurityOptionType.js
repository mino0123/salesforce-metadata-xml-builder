module.exports = (value) => {
  if (!value) { return ''; }
  if (["EnforceSharingRules","BypassSharingRules"].indexOf(value) < 0) {
    throw new Error('Invalid DupeSecurityOptionType value: ' + value);
  }
  return value;
};