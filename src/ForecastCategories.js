module.exports = (value) => {
  if (!value) { return ''; }
  if (["Omitted","Pipeline","BestCase","Forecast","Closed"].indexOf(value) < 0) {
    throw new Error('Invalid ForecastCategories value: ' + value);
  }
  return value;
};