module.exports = (value) => {
  if (!value) { return ''; }
  if (["Choice","LeastActive","MostAvailable"].indexOf(value) < 0) {
    throw new Error('Invalid LiveChatButtonRoutingType value: ' + value);
  }
  return value;
};