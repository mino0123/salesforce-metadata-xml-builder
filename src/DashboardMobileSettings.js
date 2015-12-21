
module.exports = (object, asChild) => {
  var rootTagStart = '<DashboardMobileSettings>';
  var rootTagEnd = '</DashboardMobileSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableDashboardIPadApp == null ? '' : '<enableDashboardIPadApp>' + object.enableDashboardIPadApp + '</enableDashboardIPadApp>'}
${rootTagEnd}`;
}