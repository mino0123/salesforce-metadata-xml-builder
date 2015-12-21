
module.exports = (object, asChild) => {
  var rootTagStart = '<LayoutSectionTranslation>';
  var rootTagEnd = '</LayoutSectionTranslation>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.section == null ? '' : '<section>' + object.section + '</section>'}
${rootTagEnd}`;
}