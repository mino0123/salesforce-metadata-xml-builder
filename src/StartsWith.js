module.exports = (value) => {
  if (!value) { return ''; }
  if (["Consonant","Vowel","Special"].indexOf(value) < 0) {
    throw new Error('Invalid StartsWith value: ' + value);
  }
  return value;
};