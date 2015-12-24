
module.exports = (object, asChild) => {
  var rootTagStart = '<CustomApplicationComponents>';
  var rootTagEnd = '</CustomApplicationComponents>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.alignment == null ? '' : '<alignment>' + object.alignment + '</alignment>'}
	${object.customApplicationComponent == null ? '' : object.customApplicationComponent.map(p => '<customApplicationComponent>' + p + '</customApplicationComponent>').join('')}
${rootTagEnd}`;
}