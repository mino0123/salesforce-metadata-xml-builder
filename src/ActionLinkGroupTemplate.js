const ActionLinkTemplate = require('./ActionLinkTemplate');
const PlatformActionGroupCategory = require('./PlatformActionGroupCategory');
const ActionLinkExecutionsAllowed = require('./ActionLinkExecutionsAllowed');

module.exports = (object, asChild) => {
  var rootTagStart = '<ActionLinkGroupTemplate>';
  var rootTagEnd = '</ActionLinkGroupTemplate>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.actionLinkTemplates == null ? '' : object.actionLinkTemplates.map(p => '<actionLinkTemplates>' + ActionLinkTemplate(p, true) + '</actionLinkTemplates>').join('')}
	${object.category == null ? '' : '<category>' + PlatformActionGroupCategory(object.category, true) + '</category>'}
	${object.executionsAllowed == null ? '' : '<executionsAllowed>' + ActionLinkExecutionsAllowed(object.executionsAllowed, true) + '</executionsAllowed>'}
	${object.hoursUntilExpiration == null ? '' : '<hoursUntilExpiration>' + object.hoursUntilExpiration + '</hoursUntilExpiration>'}
	${object.isPublished == null ? '' : '<isPublished>' + object.isPublished + '</isPublished>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}