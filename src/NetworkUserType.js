module.exports = (value) => {
  if (!value) { return ''; }
  if (["Internal","Customer","Partner"].indexOf(value) < 0) {
    throw new Error('Invalid NetworkUserType value: ' + value);
  }
  return value;
};