const NetworkUserType = require('./NetworkUserType');

module.exports = (object, asChild) => {
  var rootTagStart = '<UserCriteria>';
  var rootTagEnd = '</UserCriteria>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.creationAgeInSeconds == null ? '' : '<creationAgeInSeconds>' + object.creationAgeInSeconds + '</creationAgeInSeconds>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.lastChatterActivityAgeInSeconds == null ? '' : '<lastChatterActivityAgeInSeconds>' + object.lastChatterActivityAgeInSeconds + '</lastChatterActivityAgeInSeconds>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.profiles == null ? '' : object.profiles.map(p => '<profiles>' + p + '</profiles>').join('')}
	${object.userTypes == null ? '' : object.userTypes.map(p => '<userTypes>' + NetworkUserType(p, true) + '</userTypes>').join('')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}