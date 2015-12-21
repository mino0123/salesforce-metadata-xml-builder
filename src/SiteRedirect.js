module.exports = (value) => {
  if (!value) { return ''; }
  if (["Permanent","Temporary"].indexOf(value) < 0) {
    throw new Error('Invalid SiteRedirect value: ' + value);
  }
  return value;
};