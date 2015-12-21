const AnalyticsCloudComponentLayoutItem = require('./AnalyticsCloudComponentLayoutItem');
const UiBehavior = require('./UiBehavior');
const ReportChartComponentLayoutItem = require('./ReportChartComponentLayoutItem');

module.exports = (object, asChild) => {
  var rootTagStart = '<LayoutItem>';
  var rootTagEnd = '</LayoutItem>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.analyticsCloudComponent == null ? '' : '<analyticsCloudComponent>' + AnalyticsCloudComponentLayoutItem(object.analyticsCloudComponent, true) + '</analyticsCloudComponent>'}
	${object.behavior == null ? '' : '<behavior>' + UiBehavior(object.behavior, true) + '</behavior>'}
	${object.canvas == null ? '' : '<canvas>' + object.canvas + '</canvas>'}
	${object.component == null ? '' : '<component>' + object.component + '</component>'}
	${object.customLink == null ? '' : '<customLink>' + object.customLink + '</customLink>'}
	${object.emptySpace == null ? '' : '<emptySpace>' + object.emptySpace + '</emptySpace>'}
	${object.field == null ? '' : '<field>' + object.field + '</field>'}
	${object.height == null ? '' : '<height>' + object.height + '</height>'}
	${object.page == null ? '' : '<page>' + object.page + '</page>'}
	${object.reportChartComponent == null ? '' : '<reportChartComponent>' + ReportChartComponentLayoutItem(object.reportChartComponent, true) + '</reportChartComponent>'}
	${object.scontrol == null ? '' : '<scontrol>' + object.scontrol + '</scontrol>'}
	${object.showLabel == null ? '' : '<showLabel>' + object.showLabel + '</showLabel>'}
	${object.showScrollbars == null ? '' : '<showScrollbars>' + object.showScrollbars + '</showScrollbars>'}
	${object.width == null ? '' : '<width>' + object.width + '</width>'}
${rootTagEnd}`;
}