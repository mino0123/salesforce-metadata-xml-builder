const CustomApplicationTranslation = require('./CustomApplicationTranslation');
const CustomDataTypeTranslation = require('./CustomDataTypeTranslation');
const CustomLabelTranslation = require('./CustomLabelTranslation');
const CustomPageWebLinkTranslation = require('./CustomPageWebLinkTranslation');
const CustomTabTranslation = require('./CustomTabTranslation');
const GlobalQuickActionTranslation = require('./GlobalQuickActionTranslation');
const ReportTypeTranslation = require('./ReportTypeTranslation');
const ScontrolTranslation = require('./ScontrolTranslation');

module.exports = (object, asChild) => {
  var rootTagStart = '<Translations>';
  var rootTagEnd = '</Translations>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.customApplications == null ? '' : object.customApplications.map(p => '<customApplications>' + CustomApplicationTranslation(p, true) + '</customApplications>')}
	${object.customDataTypeTranslations == null ? '' : object.customDataTypeTranslations.map(p => '<customDataTypeTranslations>' + CustomDataTypeTranslation(p, true) + '</customDataTypeTranslations>')}
	${object.customLabels == null ? '' : object.customLabels.map(p => '<customLabels>' + CustomLabelTranslation(p, true) + '</customLabels>')}
	${object.customPageWebLinks == null ? '' : object.customPageWebLinks.map(p => '<customPageWebLinks>' + CustomPageWebLinkTranslation(p, true) + '</customPageWebLinks>')}
	${object.customTabs == null ? '' : object.customTabs.map(p => '<customTabs>' + CustomTabTranslation(p, true) + '</customTabs>')}
	${object.quickActions == null ? '' : object.quickActions.map(p => '<quickActions>' + GlobalQuickActionTranslation(p, true) + '</quickActions>')}
	${object.reportTypes == null ? '' : object.reportTypes.map(p => '<reportTypes>' + ReportTypeTranslation(p, true) + '</reportTypes>')}
	${object.scontrols == null ? '' : object.scontrols.map(p => '<scontrols>' + ScontrolTranslation(p, true) + '</scontrols>')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}