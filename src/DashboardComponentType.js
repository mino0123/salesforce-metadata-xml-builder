module.exports = (value) => {
  if (!value) { return ''; }
  if (["Bar","BarGrouped","BarStacked","BarStacked100","Column","ColumnGrouped","ColumnStacked","ColumnStacked100","Line","LineGrouped","Pie","Table","Metric","Gauge","LineCumulative","LineGroupedCumulative","Scontrol","VisualforcePage","Donut","Funnel","ColumnLine","ColumnLineGrouped","ColumnLineStacked","ColumnLineStacked100","Scatter","ScatterGrouped"].indexOf(value) < 0) {
    throw new Error('Invalid DashboardComponentType value: ' + value);
  }
  return value;
};