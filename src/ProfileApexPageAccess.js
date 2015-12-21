
module.exports = (object, asChild) => {
  var rootTagStart = '<ProfileApexPageAccess>';
  var rootTagEnd = '</ProfileApexPageAccess>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.apexPage == null ? '' : '<apexPage>' + object.apexPage + '</apexPage>'}
	${object.enabled == null ? '' : '<enabled>' + object.enabled + '</enabled>'}
${rootTagEnd}`;
}