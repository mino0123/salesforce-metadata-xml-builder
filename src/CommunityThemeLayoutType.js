module.exports = (value) => {
  if (!value) { return ''; }
  if (["Inner"].indexOf(value) < 0) {
    throw new Error('Invalid CommunityThemeLayoutType value: ' + value);
  }
  return value;
};