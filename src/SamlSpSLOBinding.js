module.exports = (value) => {
  if (!value) { return ''; }
  if (["RedirectBinding","PostBinding"].indexOf(value) < 0) {
    throw new Error('Invalid SamlSpSLOBinding value: ' + value);
  }
  return value;
};