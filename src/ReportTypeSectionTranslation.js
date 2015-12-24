const ReportTypeColumnTranslation = require('./ReportTypeColumnTranslation');

module.exports = (object, asChild) => {
  var rootTagStart = '<ReportTypeSectionTranslation>';
  var rootTagEnd = '</ReportTypeSectionTranslation>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.columns == null ? '' : object.columns.map(p => '<columns>' + ReportTypeColumnTranslation(p, true) + '</columns>').join('')}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
${rootTagEnd}`;
}