module.exports = (value) => {
  if (!value) { return ''; }
  if (["AES_128","AES_256","Triple_Des"].indexOf(value) < 0) {
    throw new Error('Invalid SamlEncryptionType value: ' + value);
  }
  return value;
};