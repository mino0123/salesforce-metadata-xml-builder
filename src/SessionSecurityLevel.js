module.exports = (value) => {
  if (!value) { return ''; }
  if (["LOW","STANDARD","HIGH_ASSURANCE"].indexOf(value) < 0) {
    throw new Error('Invalid SessionSecurityLevel value: ' + value);
  }
  return value;
};