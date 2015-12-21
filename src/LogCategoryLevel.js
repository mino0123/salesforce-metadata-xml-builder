module.exports = (value) => {
  if (!value) { return ''; }
  if (["None","Internal","Finest","Finer","Fine","Debug","Info","Warn","Error"].indexOf(value) < 0) {
    throw new Error('Invalid LogCategoryLevel value: ' + value);
  }
  return value;
};