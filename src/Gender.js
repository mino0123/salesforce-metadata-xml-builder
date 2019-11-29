module.exports = (value) => {
  if (!value) { return ''; }
  if (["Neuter","Masculine","Feminine","AnimateMasculine","ClassI","ClassIII","ClassV","ClassVII","ClassIX","ClassXI","ClassXIV","ClassXV","ClassXVI","ClassXVII","ClassXVIII"].indexOf(value) < 0) {
    throw new Error('Invalid Gender value: ' + value);
  }
  return value;
};