module.exports = (value) => {
  if (!value) { return ''; }
  if (["Unspecified","EmailAddress","Persistent","Transient"].indexOf(value) < 0) {
    throw new Error('Invalid SamlNameIdFormatType value: ' + value);
  }
  return value;
};