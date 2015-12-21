module.exports = (value) => {
  if (!value) { return ''; }
  if (["None","Debugonly","Db","Profiling","Callout","Detail"].indexOf(value) < 0) {
    throw new Error('Invalid LogType value: ' + value);
  }
  return value;
};