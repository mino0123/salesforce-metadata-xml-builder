module.exports = (value) => {
  if (!value) { return ''; }
  if (["None","ProbabilisticEncryption","CaseSensitiveDeterministicEncryption","CaseInsensitiveDeterministicEncryption"].indexOf(value) < 0) {
    throw new Error('Invalid EncryptionScheme value: ' + value);
  }
  return value;
};