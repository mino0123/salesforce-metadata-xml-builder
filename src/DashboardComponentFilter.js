module.exports = (value) => {
  if (!value) { return ''; }
  if (["RowLabelAscending","RowLabelDescending","RowValueAscending","RowValueDescending"].indexOf(value) < 0) {
    throw new Error('Invalid DashboardComponentFilter value: ' + value);
  }
  return value;
};