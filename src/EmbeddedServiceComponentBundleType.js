module.exports = (value) => {
  if (!value) { return ''; }
  if (["AuraDefinitionBundle","LightningComponentBundle"].indexOf(value) < 0) {
    throw new Error('Invalid EmbeddedServiceComponentBundleType value: ' + value);
  }
  return value;
};