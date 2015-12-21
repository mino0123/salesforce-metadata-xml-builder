module.exports = (value) => {
  if (!value) { return ''; }
  if (["Auto","Integer","Hundreds","Thousands","Millions","Billions","Trillions"].indexOf(value) < 0) {
    throw new Error('Invalid ChartUnits value: ' + value);
  }
  return value;
};