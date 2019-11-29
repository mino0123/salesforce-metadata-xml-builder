const RecordActionDeploymentChannel = require('./RecordActionDeploymentChannel');
const RecordActionDeploymentContext = require('./RecordActionDeploymentContext');
const RecordActionRecommendation = require('./RecordActionRecommendation');
const RecordActionSelectableItem = require('./RecordActionSelectableItem');

module.exports = (object, asChild) => {
  var rootTagStart = '<RecordActionDeployment>';
  var rootTagEnd = '</RecordActionDeployment>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.channelConfigurations == null ? '' : object.channelConfigurations.map(p => '<channelConfigurations>' + RecordActionDeploymentChannel(p, true) + '</channelConfigurations>').join('')}
	${object.deploymentContexts == null ? '' : object.deploymentContexts.map(p => '<deploymentContexts>' + RecordActionDeploymentContext(p, true) + '</deploymentContexts>').join('')}
	${object.hasGuidedActions == null ? '' : '<hasGuidedActions>' + object.hasGuidedActions + '</hasGuidedActions>'}
	${object.hasRecommendations == null ? '' : '<hasRecommendations>' + object.hasRecommendations + '</hasRecommendations>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.recommendation == null ? '' : '<recommendation>' + RecordActionRecommendation(object.recommendation, true) + '</recommendation>'}
	${object.selectableItems == null ? '' : object.selectableItems.map(p => '<selectableItems>' + RecordActionSelectableItem(p, true) + '</selectableItems>').join('')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}