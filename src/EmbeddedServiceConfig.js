const EmbeddedServiceAuthMethod = require('./EmbeddedServiceAuthMethod');
const EmbeddedServiceAppointmentSettings = require('./EmbeddedServiceAppointmentSettings');
const EmbeddedServiceCustomComponent = require('./EmbeddedServiceCustomComponent');
const EmbeddedServiceCustomLabel = require('./EmbeddedServiceCustomLabel');
const EmbeddedServiceFlowConfig = require('./EmbeddedServiceFlowConfig');
const EmbeddedServiceFlow = require('./EmbeddedServiceFlow');
const EmbeddedServiceLayout = require('./EmbeddedServiceLayout');

module.exports = (object, asChild) => {
  var rootTagStart = '<EmbeddedServiceConfig>';
  var rootTagEnd = '</EmbeddedServiceConfig>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.areGuestUsersAllowed == null ? '' : '<areGuestUsersAllowed>' + object.areGuestUsersAllowed + '</areGuestUsersAllowed>'}
	${object.authMethod == null ? '' : '<authMethod>' + EmbeddedServiceAuthMethod(object.authMethod, true) + '</authMethod>'}
	${object.embeddedServiceAppointmentSettings == null ? '' : '<embeddedServiceAppointmentSettings>' + EmbeddedServiceAppointmentSettings(object.embeddedServiceAppointmentSettings, true) + '</embeddedServiceAppointmentSettings>'}
	${object.embeddedServiceCustomComponents == null ? '' : object.embeddedServiceCustomComponents.map(p => '<embeddedServiceCustomComponents>' + EmbeddedServiceCustomComponent(p, true) + '</embeddedServiceCustomComponents>').join('')}
	${object.embeddedServiceCustomLabels == null ? '' : object.embeddedServiceCustomLabels.map(p => '<embeddedServiceCustomLabels>' + EmbeddedServiceCustomLabel(p, true) + '</embeddedServiceCustomLabels>').join('')}
	${object.embeddedServiceFlowConfig == null ? '' : '<embeddedServiceFlowConfig>' + EmbeddedServiceFlowConfig(object.embeddedServiceFlowConfig, true) + '</embeddedServiceFlowConfig>'}
	${object.embeddedServiceFlows == null ? '' : object.embeddedServiceFlows.map(p => '<embeddedServiceFlows>' + EmbeddedServiceFlow(p, true) + '</embeddedServiceFlows>').join('')}
	${object.embeddedServiceLayouts == null ? '' : object.embeddedServiceLayouts.map(p => '<embeddedServiceLayouts>' + EmbeddedServiceLayout(p, true) + '</embeddedServiceLayouts>').join('')}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.shouldHideAuthDialog == null ? '' : '<shouldHideAuthDialog>' + object.shouldHideAuthDialog + '</shouldHideAuthDialog>'}
	${object.site == null ? '' : '<site>' + object.site + '</site>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}