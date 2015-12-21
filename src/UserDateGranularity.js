module.exports = (value) => {
  if (!value) { return ''; }
  if (["None","Day","Week","Month","Quarter","Year","FiscalQuarter","FiscalYear","MonthInYear","DayInMonth","FiscalPeriod","FiscalWeek"].indexOf(value) < 0) {
    throw new Error('Invalid UserDateGranularity value: ' + value);
  }
  return value;
};