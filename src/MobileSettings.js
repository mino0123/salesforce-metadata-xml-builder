const ChatterMobileSettings = require('./ChatterMobileSettings');
const DashboardMobileSettings = require('./DashboardMobileSettings');
const SFDCMobileSettings = require('./SFDCMobileSettings');
const TouchMobileSettings = require('./TouchMobileSettings');

module.exports = (object, asChild) => {
  var rootTagStart = '<MobileSettings>';
  var rootTagEnd = '</MobileSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.chatterMobile == null ? '' : '<chatterMobile>' + ChatterMobileSettings(object.chatterMobile, true) + '</chatterMobile>'}
	${object.dashboardMobile == null ? '' : '<dashboardMobile>' + DashboardMobileSettings(object.dashboardMobile, true) + '</dashboardMobile>'}
	${object.salesforceMobile == null ? '' : '<salesforceMobile>' + SFDCMobileSettings(object.salesforceMobile, true) + '</salesforceMobile>'}
	${object.touchMobile == null ? '' : '<touchMobile>' + TouchMobileSettings(object.touchMobile, true) + '</touchMobile>'}
${rootTagEnd}`;
}