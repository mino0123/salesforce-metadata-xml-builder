module.exports = (value) => {
  if (!value) { return ''; }
  if (["Neuter","Masculine","Feminine","AnimateMasculine"].indexOf(value) < 0) {
    throw new Error('Invalid Gender value: ' + value);
  }
  return value;
};