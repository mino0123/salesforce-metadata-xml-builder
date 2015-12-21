const SiteType = require('./SiteType');

module.exports = (object, asChild) => {
  var rootTagStart = '<SiteDotCom>';
  var rootTagEnd = '</SiteDotCom>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.siteType == null ? '' : '<siteType>' + SiteType(object.siteType, true) + '</siteType>'}
${rootTagEnd}`;
}