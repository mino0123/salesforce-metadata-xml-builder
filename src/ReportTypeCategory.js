module.exports = (value) => {
  if (!value) { return ''; }
  if (["accounts","opportunities","forecasts","cases","leads","campaigns","activities","busop","products","admin","territory","other","content","usage_entitlement","wdc","calibration","territory2","quotes","individual"].indexOf(value) < 0) {
    throw new Error('Invalid ReportTypeCategory value: ' + value);
  }
  return value;
};