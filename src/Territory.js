
module.exports = (object, asChild) => {
  var rootTagStart = '<Territory>';
  var rootTagEnd = '</Territory>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.accountAccessLevel == null ? '' : '<accountAccessLevel>' + object.accountAccessLevel + '</accountAccessLevel>'}
	${object.parentTerritory == null ? '' : '<parentTerritory>' + object.parentTerritory + '</parentTerritory>'}
	${object.caseAccessLevel == null ? '' : '<caseAccessLevel>' + object.caseAccessLevel + '</caseAccessLevel>'}
	${object.contactAccessLevel == null ? '' : '<contactAccessLevel>' + object.contactAccessLevel + '</contactAccessLevel>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.mayForecastManagerShare == null ? '' : '<mayForecastManagerShare>' + object.mayForecastManagerShare + '</mayForecastManagerShare>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.opportunityAccessLevel == null ? '' : '<opportunityAccessLevel>' + object.opportunityAccessLevel + '</opportunityAccessLevel>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}