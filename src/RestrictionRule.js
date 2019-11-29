const EnforcementType = require('./EnforcementType');

module.exports = (object, asChild) => {
  var rootTagStart = '<RestrictionRule>';
  var rootTagEnd = '</RestrictionRule>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.active == null ? '' : '<active>' + object.active + '</active>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.enforcementType == null ? '' : '<enforcementType>' + EnforcementType(object.enforcementType, true) + '</enforcementType>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.recordFilter == null ? '' : '<recordFilter>' + object.recordFilter + '</recordFilter>'}
	${object.targetEntity == null ? '' : '<targetEntity>' + object.targetEntity + '</targetEntity>'}
	${object.userCriteria == null ? '' : '<userCriteria>' + object.userCriteria + '</userCriteria>'}
	${object.version == null ? '' : '<version>' + object.version + '</version>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}