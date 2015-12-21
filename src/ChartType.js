module.exports = (value) => {
  if (!value) { return ''; }
  if (["None","Scatter","ScatterGrouped","Bubble","BubbleGrouped","HorizontalBar","HorizontalBarGrouped","HorizontalBarStacked","HorizontalBarStackedTo100","VerticalColumn","VerticalColumnGrouped","VerticalColumnStacked","VerticalColumnStackedTo100","Line","LineGrouped","LineCumulative","LineCumulativeGrouped","Pie","Donut","Funnel","VerticalColumnLine","VerticalColumnGroupedLine","VerticalColumnStackedLine","Plugin"].indexOf(value) < 0) {
    throw new Error('Invalid ChartType value: ' + value);
  }
  return value;
};