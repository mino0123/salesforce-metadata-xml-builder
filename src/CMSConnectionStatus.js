module.exports = (value) => {
  if (!value) { return ''; }
  if (["ACTIVE","INACTIVE"].indexOf(value) < 0) {
    throw new Error('Invalid CMSConnectionStatus value: ' + value);
  }
  return value;
};