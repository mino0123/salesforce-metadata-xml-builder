module.exports = (value) => {
  if (!value) { return ''; }
  if (["Designer","VisualForce","Standard","Configurable"].indexOf(value) < 0) {
    throw new Error('Invalid NetworkPageOverrideSetting value: ' + value);
  }
  return value;
};