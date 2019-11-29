const ACPStatus = require('./ACPStatus');

module.exports = (object, asChild) => {
  var rootTagStart = '<AccessControlPolicy>';
  var rootTagEnd = '</AccessControlPolicy>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.active == null ? '' : '<active>' + object.active + '</active>'}
	${object.deploymentStatus == null ? '' : '<deploymentStatus>' + ACPStatus(object.deploymentStatus, true) + '</deploymentStatus>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.targetEntity == null ? '' : '<targetEntity>' + object.targetEntity + '</targetEntity>'}
	${object.version == null ? '' : '<version>' + object.version + '</version>'}
	${object.content == null ? '' : '<content>' + object.content + '</content>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}