module.exports = (value) => {
  if (!value) { return ''; }
  if (["equals","notEqual","lessThan","greaterThan","lessOrEqual","greaterOrEqual","contains","notContain","startsWith","includes","excludes","between"].indexOf(value) < 0) {
    throw new Error('Invalid DashboardFilterOperation value: ' + value);
  }
  return value;
};