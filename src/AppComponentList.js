
module.exports = (object, asChild) => {
  var rootTagStart = '<AppComponentList>';
  var rootTagEnd = '</AppComponentList>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.alignment == null ? '' : '<alignment>' + object.alignment + '</alignment>'}
	${object.components == null ? '' : object.components.map(p => '<components>' + p + '</components>').join('')}
${rootTagEnd}`;
}