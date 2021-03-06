
module.exports = (object, asChild) => {
  var rootTagStart = '<ProfileCustomPermissions>';
  var rootTagEnd = '</ProfileCustomPermissions>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enabled == null ? '' : '<enabled>' + object.enabled + '</enabled>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
${rootTagEnd}`;
}