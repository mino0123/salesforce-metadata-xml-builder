module.exports = (value) => {
  if (!value) { return ''; }
  if (["AllChannels","App","Pkb","Csp","Prm"].indexOf(value) < 0) {
    throw new Error('Invalid Channel value: ' + value);
  }
  return value;
};