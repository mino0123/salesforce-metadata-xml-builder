module.exports = (value) => {
  if (!value) { return ''; }
  if (["List","Hierarchy"].indexOf(value) < 0) {
    throw new Error('Invalid CustomSettingsType value: ' + value);
  }
  return value;
};