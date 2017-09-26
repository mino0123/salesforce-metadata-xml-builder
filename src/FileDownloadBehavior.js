module.exports = (value) => {
  if (!value) { return ''; }
  if (["DOWNLOAD","EXECUTE_IN_BROWSER","HYBRID"].indexOf(value) < 0) {
    throw new Error('Invalid FileDownloadBehavior value: ' + value);
  }
  return value;
};