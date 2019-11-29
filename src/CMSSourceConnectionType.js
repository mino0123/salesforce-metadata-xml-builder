module.exports = (value) => {
  if (!value) { return ''; }
  if (["Public","Authenticated"].indexOf(value) < 0) {
    throw new Error('Invalid CMSSourceConnectionType value: ' + value);
  }
  return value;
};