module.exports = (value) => {
  if (!value) { return ''; }
  if (["SAML1_1","SAML2_0"].indexOf(value) < 0) {
    throw new Error('Invalid SamlType value: ' + value);
  }
  return value;
};