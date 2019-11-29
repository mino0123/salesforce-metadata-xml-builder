module.exports = (value) => {
  if (!value) { return ''; }
  if (["TopToBottom","LeftToRight"].indexOf(value) < 0) {
    throw new Error('Invalid FormSectionTabOrder value: ' + value);
  }
  return value;
};