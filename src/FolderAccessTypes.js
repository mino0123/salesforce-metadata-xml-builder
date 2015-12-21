module.exports = (value) => {
  if (!value) { return ''; }
  if (["Shared","Public","Hidden","PublicInternal"].indexOf(value) < 0) {
    throw new Error('Invalid FolderAccessTypes value: ' + value);
  }
  return value;
};