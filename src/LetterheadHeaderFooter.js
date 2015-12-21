const LetterheadHorizontalAlignment = require('./LetterheadHorizontalAlignment');
const LetterheadVerticalAlignment = require('./LetterheadVerticalAlignment');

module.exports = (object, asChild) => {
  var rootTagStart = '<LetterheadHeaderFooter>';
  var rootTagEnd = '</LetterheadHeaderFooter>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.backgroundColor == null ? '' : '<backgroundColor>' + object.backgroundColor + '</backgroundColor>'}
	${object.height == null ? '' : '<height>' + object.height + '</height>'}
	${object.horizontalAlignment == null ? '' : '<horizontalAlignment>' + LetterheadHorizontalAlignment(object.horizontalAlignment, true) + '</horizontalAlignment>'}
	${object.logo == null ? '' : '<logo>' + object.logo + '</logo>'}
	${object.verticalAlignment == null ? '' : '<verticalAlignment>' + LetterheadVerticalAlignment(object.verticalAlignment, true) + '</verticalAlignment>'}
${rootTagEnd}`;
}