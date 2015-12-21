module.exports = (value) => {
  if (!value) { return ''; }
  if (["ReadOnly","ReadWrite"].indexOf(value) < 0) {
    throw new Error('Invalid PublicFolderAccess value: ' + value);
  }
  return value;
};