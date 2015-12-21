const ChartBackgroundDirection = require('./ChartBackgroundDirection');
const DashboardFilter = require('./DashboardFilter');
const DashboardGridLayout = require('./DashboardGridLayout');
const DashboardType = require('./DashboardType');
const DashboardComponentSection = require('./DashboardComponentSection');

module.exports = (object, asChild) => {
  var rootTagStart = '<Dashboard>';
  var rootTagEnd = '</Dashboard>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.backgroundEndColor == null ? '' : '<backgroundEndColor>' + object.backgroundEndColor + '</backgroundEndColor>'}
	${object.backgroundFadeDirection == null ? '' : '<backgroundFadeDirection>' + ChartBackgroundDirection(object.backgroundFadeDirection, true) + '</backgroundFadeDirection>'}
	${object.backgroundStartColor == null ? '' : '<backgroundStartColor>' + object.backgroundStartColor + '</backgroundStartColor>'}
	${object.dashboardFilters == null ? '' : object.dashboardFilters.map(p => '<dashboardFilters>' + DashboardFilter(p, true) + '</dashboardFilters>')}
	${object.dashboardGridLayout == null ? '' : '<dashboardGridLayout>' + DashboardGridLayout(object.dashboardGridLayout, true) + '</dashboardGridLayout>'}
	${object.dashboardResultRefreshedDate == null ? '' : '<dashboardResultRefreshedDate>' + object.dashboardResultRefreshedDate + '</dashboardResultRefreshedDate>'}
	${object.dashboardResultRunningUser == null ? '' : '<dashboardResultRunningUser>' + object.dashboardResultRunningUser + '</dashboardResultRunningUser>'}
	${object.dashboardType == null ? '' : '<dashboardType>' + DashboardType(object.dashboardType, true) + '</dashboardType>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.folderName == null ? '' : '<folderName>' + object.folderName + '</folderName>'}
	${object.isGridLayout == null ? '' : '<isGridLayout>' + object.isGridLayout + '</isGridLayout>'}
	${object.leftSection == null ? '' : '<leftSection>' + DashboardComponentSection(object.leftSection, true) + '</leftSection>'}
	${object.middleSection == null ? '' : '<middleSection>' + DashboardComponentSection(object.middleSection, true) + '</middleSection>'}
	${object.rightSection == null ? '' : '<rightSection>' + DashboardComponentSection(object.rightSection, true) + '</rightSection>'}
	${object.runningUser == null ? '' : '<runningUser>' + object.runningUser + '</runningUser>'}
	${object.textColor == null ? '' : '<textColor>' + object.textColor + '</textColor>'}
	${object.title == null ? '' : '<title>' + object.title + '</title>'}
	${object.titleColor == null ? '' : '<titleColor>' + object.titleColor + '</titleColor>'}
	${object.titleSize == null ? '' : '<titleSize>' + object.titleSize + '</titleSize>'}
${rootTagEnd}`;
}