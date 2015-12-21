module.exports = (value) => {
  if (!value) { return ''; }
  if (["asterisk","X"].indexOf(value) < 0) {
    throw new Error('Invalid EncryptedFieldMaskChar value: ' + value);
  }
  return value;
};