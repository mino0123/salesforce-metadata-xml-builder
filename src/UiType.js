module.exports = (value) => {
  if (!value) { return ''; }
  if (["Aloha","Lightning"].indexOf(value) < 0) {
    throw new Error('Invalid UiType value: ' + value);
  }
  return value;
};