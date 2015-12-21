module.exports = (value) => {
  if (!value) { return ''; }
  if (["None","IdpInitiated","SpInitiated"].indexOf(value) < 0) {
    throw new Error('Invalid SamlInitiationMethod value: ' + value);
  }
  return value;
};