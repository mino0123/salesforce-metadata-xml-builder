module.exports = (value) => {
  if (!value) { return ''; }
  if (["Highlight","PreviewImage"].indexOf(value) < 0) {
    throw new Error('Invalid CommunityTemplateBundleInfoType value: ' + value);
  }
  return value;
};