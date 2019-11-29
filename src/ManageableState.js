module.exports = (value) => {
  if (!value) { return ''; }
  if (["released","deleted","deprecated","installed","beta","unmanaged","installedEditable","deprecatedEditable"].indexOf(value) < 0) {
    throw new Error('Invalid ManageableState value: ' + value);
  }
  return value;
};