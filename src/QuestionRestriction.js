module.exports = (value) => {
  if (!value) { return ''; }
  if (["None","DoesNotContainPassword"].indexOf(value) < 0) {
    throw new Error('Invalid QuestionRestriction value: ' + value);
  }
  return value;
};