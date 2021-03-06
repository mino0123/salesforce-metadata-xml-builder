
module.exports = (object, asChild) => {
  var rootTagStart = '<ProfileApexClassAccess>';
  var rootTagEnd = '</ProfileApexClassAccess>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.apexClass == null ? '' : '<apexClass>' + object.apexClass + '</apexClass>'}
	${object.enabled == null ? '' : '<enabled>' + object.enabled + '</enabled>'}
${rootTagEnd}`;
}