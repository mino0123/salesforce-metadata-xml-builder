module.exports = (value) => {
  if (!value) { return ''; }
  if (["ThreeAttempts","FiveAttempts","TenAttempts","NoLimit"].indexOf(value) < 0) {
    throw new Error('Invalid MaxLoginAttempts value: ' + value);
  }
  return value;
};