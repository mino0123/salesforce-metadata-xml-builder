const LayoutSectionTranslation = require('./LayoutSectionTranslation');

module.exports = (object, asChild) => {
  var rootTagStart = '<LayoutTranslation>';
  var rootTagEnd = '</LayoutTranslation>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.layout == null ? '' : '<layout>' + object.layout + '</layout>'}
	${object.layoutType == null ? '' : '<layoutType>' + object.layoutType + '</layoutType>'}
	${object.sections == null ? '' : object.sections.map(p => '<sections>' + LayoutSectionTranslation(p, true) + '</sections>').join('')}
${rootTagEnd}`;
}