module.exports = (value) => {
  if (!value) { return ''; }
  if (["None","Available","Visible"].indexOf(value) < 0) {
    throw new Error('Invalid PermissionSetTabVisibility value: ' + value);
  }
  return value;
};