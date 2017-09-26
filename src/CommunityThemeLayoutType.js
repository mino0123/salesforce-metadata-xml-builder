module.exports = (value) => {
  if (!value) { return ''; }
  if (["Login","Home","Inner"].indexOf(value) < 0) {
    throw new Error('Invalid CommunityThemeLayoutType value: ' + value);
  }
  return value;
};