module.exports = (value) => {
  if (!value) { return ''; }
  if (["AEM","Drupal","WordPress","SDL","Sitecore","Other"].indexOf(value) < 0) {
    throw new Error('Invalid CMSConnectionSourceType value: ' + value);
  }
  return value;
};