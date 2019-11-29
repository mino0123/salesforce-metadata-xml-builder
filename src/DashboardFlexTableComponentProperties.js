const DashboardComponentColumn = require('./DashboardComponentColumn');
const DashboardComponentSortInfo = require('./DashboardComponentSortInfo');

module.exports = (object, asChild) => {
  var rootTagStart = '<DashboardFlexTableComponentProperties>';
  var rootTagEnd = '</DashboardFlexTableComponentProperties>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.decimalPrecision == null ? '' : '<decimalPrecision>' + object.decimalPrecision + '</decimalPrecision>'}
	${object.flexTableColumn == null ? '' : object.flexTableColumn.map(p => '<flexTableColumn>' + DashboardComponentColumn(p, true) + '</flexTableColumn>').join('')}
	${object.flexTableSortInfo == null ? '' : '<flexTableSortInfo>' + DashboardComponentSortInfo(object.flexTableSortInfo, true) + '</flexTableSortInfo>'}
	${object.hideChatterPhotos == null ? '' : '<hideChatterPhotos>' + object.hideChatterPhotos + '</hideChatterPhotos>'}
${rootTagEnd}`;
}