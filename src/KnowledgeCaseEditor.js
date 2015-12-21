module.exports = (value) => {
  if (!value) { return ''; }
  if (["simple","standard"].indexOf(value) < 0) {
    throw new Error('Invalid KnowledgeCaseEditor value: ' + value);
  }
  return value;
};