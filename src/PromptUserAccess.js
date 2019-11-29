module.exports = (value) => {
  if (!value) { return ''; }
  if (["Everyone","SpecificPermissions"].indexOf(value) < 0) {
    throw new Error('Invalid PromptUserAccess value: ' + value);
  }
  return value;
};