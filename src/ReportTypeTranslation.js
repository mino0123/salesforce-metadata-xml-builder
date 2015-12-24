const ReportTypeSectionTranslation = require('./ReportTypeSectionTranslation');

module.exports = (object, asChild) => {
  var rootTagStart = '<ReportTypeTranslation>';
  var rootTagEnd = '</ReportTypeTranslation>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.sections == null ? '' : object.sections.map(p => '<sections>' + ReportTypeSectionTranslation(p, true) + '</sections>').join('')}
${rootTagEnd}`;
}