module.exports = (value) => {
  if (!value) { return ''; }
  if (["None","First","Second"].indexOf(value) < 0) {
    throw new Error('Invalid Possessive value: ' + value);
  }
  return value;
};