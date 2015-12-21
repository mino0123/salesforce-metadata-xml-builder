module.exports = (value) => {
  if (!value) { return ''; }
  if (["Page","Tab","Toc"].indexOf(value) < 0) {
    throw new Error('Invalid Template value: ' + value);
  }
  return value;
};