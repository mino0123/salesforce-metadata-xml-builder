module.exports = (value) => {
  if (!value) { return ''; }
  if (["equals","notEqual","lessThan","greaterThan","lessOrEqual","greaterOrEqual","contains","notContain","startsWith","includes","excludes","within"].indexOf(value) < 0) {
    throw new Error('Invalid FilterOperation value: ' + value);
  }
  return value;
};