module.exports = (value) => {
  if (!value) { return ''; }
  if (["Sales","Service","Basic"].indexOf(value) < 0) {
    throw new Error('Invalid EmbeddedServiceScenario value: ' + value);
  }
  return value;
};