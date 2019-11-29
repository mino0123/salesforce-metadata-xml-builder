
module.exports = (object, asChild) => {
  var rootTagStart = '<ProfileSearchLayouts>';
  var rootTagEnd = '</ProfileSearchLayouts>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.fields == null ? '' : object.fields.map(p => '<fields>' + p + '</fields>').join('')}
	${object.profileName == null ? '' : '<profileName>' + object.profileName + '</profileName>'}
${rootTagEnd}`;
}