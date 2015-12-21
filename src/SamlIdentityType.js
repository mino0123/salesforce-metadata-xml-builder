module.exports = (value) => {
  if (!value) { return ''; }
  if (["Username","FederationId","UserId"].indexOf(value) < 0) {
    throw new Error('Invalid SamlIdentityType value: ' + value);
  }
  return value;
};