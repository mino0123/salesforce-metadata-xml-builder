module.exports = (value) => {
  if (!value) { return ''; }
  if (["Anonymous","PerUser","NamedUser"].indexOf(value) < 0) {
    throw new Error('Invalid ExternalPrincipalType value: ' + value);
  }
  return value;
};