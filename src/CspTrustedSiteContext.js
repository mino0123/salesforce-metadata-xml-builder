module.exports = (value) => {
  if (!value) { return ''; }
  if (["All","LEX","Communities"].indexOf(value) < 0) {
    throw new Error('Invalid CspTrustedSiteContext value: ' + value);
  }
  return value;
};