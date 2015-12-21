const SiteRedirect = require('./SiteRedirect');

module.exports = (object, asChild) => {
  var rootTagStart = '<SiteRedirectMapping>';
  var rootTagEnd = '</SiteRedirectMapping>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.action == null ? '' : '<action>' + SiteRedirect(object.action, true) + '</action>'}
	${object.isActive == null ? '' : '<isActive>' + object.isActive + '</isActive>'}
	${object.source == null ? '' : '<source>' + object.source + '</source>'}
	${object.target == null ? '' : '<target>' + object.target + '</target>'}
${rootTagEnd}`;
}