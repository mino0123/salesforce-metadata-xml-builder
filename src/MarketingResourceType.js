
module.exports = (object, asChild) => {
  var rootTagStart = '<MarketingResourceType>';
  var rootTagEnd = '</MarketingResourceType>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.object == null ? '' : '<object>' + object.object + '</object>'}
	${object.provider == null ? '' : '<provider>' + object.provider + '</provider>'}
${rootTagEnd}`;
}