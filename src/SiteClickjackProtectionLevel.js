module.exports = (value) => {
  if (!value) { return ''; }
  if (["AllowAllFraming","External","SameOriginOnly","NoFraming"].indexOf(value) < 0) {
    throw new Error('Invalid SiteClickjackProtectionLevel value: ' + value);
  }
  return value;
};