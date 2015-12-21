module.exports = (value) => {
  if (!value) { return ''; }
  if (["Username","FederationId","UserId","SpokeId","CustomAttribute","PersistentId"].indexOf(value) < 0) {
    throw new Error('Invalid SamlSubjectType value: ' + value);
  }
  return value;
};