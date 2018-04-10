module.exports = (value) => {
  if (!value) { return ''; }
  if (["AccountInformation","ConfigurationAndUsageData","DataIntendedToBePublic","BusinessSetupDataBusinessDataAndAggregates","AssociativeBusinessOrPersonalData","AuthenticationData"].indexOf(value) < 0) {
    throw new Error('Invalid SecurityClassification value: ' + value);
  }
  return value;
};