module.exports = (value) => {
  if (!value) { return ''; }
  if (["View","EditAllContents","Manage"].indexOf(value) < 0) {
    throw new Error('Invalid FolderShareAccessLevel value: ' + value);
  }
  return value;
};