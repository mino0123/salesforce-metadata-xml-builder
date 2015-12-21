module.exports = (value) => {
  if (!value) { return ''; }
  if (["all","creditCard","ssn","lastFour","sin","nino"].indexOf(value) < 0) {
    throw new Error('Invalid EncryptedFieldMaskType value: ' + value);
  }
  return value;
};