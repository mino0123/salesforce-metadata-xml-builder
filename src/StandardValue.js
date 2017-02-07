const ForecastCategories = require('./ForecastCategories');

module.exports = (object, asChild) => {
  var rootTagStart = '<StandardValue>';
  var rootTagEnd = '</StandardValue>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.allowEmail == null ? '' : '<allowEmail>' + object.allowEmail + '</allowEmail>'}
	${object.closed == null ? '' : '<closed>' + object.closed + '</closed>'}
	${object.converted == null ? '' : '<converted>' + object.converted + '</converted>'}
	${object.cssExposed == null ? '' : '<cssExposed>' + object.cssExposed + '</cssExposed>'}
	${object.forecastCategory == null ? '' : '<forecastCategory>' + ForecastCategories(object.forecastCategory, true) + '</forecastCategory>'}
	${object.highPriority == null ? '' : '<highPriority>' + object.highPriority + '</highPriority>'}
	${object.probability == null ? '' : '<probability>' + object.probability + '</probability>'}
	${object.reverseRole == null ? '' : '<reverseRole>' + object.reverseRole + '</reverseRole>'}
	${object.reviewed == null ? '' : '<reviewed>' + object.reviewed + '</reviewed>'}
	${object.won == null ? '' : '<won>' + object.won + '</won>'}
	${object.color == null ? '' : '<color>' + object.color + '</color>'}
	${object.default == null ? '' : '<default>' + object.default + '</default>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.isActive == null ? '' : '<isActive>' + object.isActive + '</isActive>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}