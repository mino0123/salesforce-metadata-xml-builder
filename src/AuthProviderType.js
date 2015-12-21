module.exports = (value) => {
  if (!value) { return ''; }
  if (["Facebook","Janrain","Salesforce","OpenIdConnect","MicrosoftACS","LinkedIn","Twitter","Google","GitHub"].indexOf(value) < 0) {
    throw new Error('Invalid AuthProviderType value: ' + value);
  }
  return value;
};