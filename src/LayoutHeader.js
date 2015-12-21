module.exports = (value) => {
  if (!value) { return ''; }
  if (["PersonalTagging","PublicTagging"].indexOf(value) < 0) {
    throw new Error('Invalid LayoutHeader value: ' + value);
  }
  return value;
};