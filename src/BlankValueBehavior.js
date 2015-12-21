module.exports = (value) => {
  if (!value) { return ''; }
  if (["MatchBlanks","NullNotAllowed"].indexOf(value) < 0) {
    throw new Error('Invalid BlankValueBehavior value: ' + value);
  }
  return value;
};