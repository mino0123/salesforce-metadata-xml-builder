const ForecastCategories = require('./ForecastCategories');

module.exports = (object, asChild) => {
  var rootTagStart = '<PicklistValue>';
  var rootTagEnd = '</PicklistValue>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.color == null ? '' : '<color>' + object.color + '</color>'}
	${object.default == null ? '' : '<default>' + object.default + '</default>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.isActive == null ? '' : '<isActive>' + object.isActive + '</isActive>'}
	${object.allowEmail == null ? '' : '<allowEmail>' + object.allowEmail + '</allowEmail>'}
	${object.closed == null ? '' : '<closed>' + object.closed + '</closed>'}
	${object.controllingFieldValues == null ? '' : object.controllingFieldValues.map(p => '<controllingFieldValues>' + p + '</controllingFieldValues>').join('')}
	${object.converted == null ? '' : '<converted>' + object.converted + '</converted>'}
	${object.cssExposed == null ? '' : '<cssExposed>' + object.cssExposed + '</cssExposed>'}
	${object.forecastCategory == null ? '' : '<forecastCategory>' + ForecastCategories(object.forecastCategory, true) + '</forecastCategory>'}
	${object.highPriority == null ? '' : '<highPriority>' + object.highPriority + '</highPriority>'}
	${object.probability == null ? '' : '<probability>' + object.probability + '</probability>'}
	${object.reverseRole == null ? '' : '<reverseRole>' + object.reverseRole + '</reverseRole>'}
	${object.reviewed == null ? '' : '<reviewed>' + object.reviewed + '</reviewed>'}
	${object.won == null ? '' : '<won>' + object.won + '</won>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}