module.exports = (value) => {
  if (!value) { return ''; }
  if (["OpportunityCloseDate","ProductDate","ScheduleDate"].indexOf(value) < 0) {
    throw new Error('Invalid ForecastingDateType value: ' + value);
  }
  return value;
};