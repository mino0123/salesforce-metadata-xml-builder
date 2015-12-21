const LetterheadLine = require('./LetterheadLine');
const LetterheadHeaderFooter = require('./LetterheadHeaderFooter');

module.exports = (object, asChild) => {
  var rootTagStart = '<Letterhead>';
  var rootTagEnd = '</Letterhead>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.available == null ? '' : '<available>' + object.available + '</available>'}
	${object.backgroundColor == null ? '' : '<backgroundColor>' + object.backgroundColor + '</backgroundColor>'}
	${object.bodyColor == null ? '' : '<bodyColor>' + object.bodyColor + '</bodyColor>'}
	${object.bottomLine == null ? '' : '<bottomLine>' + LetterheadLine(object.bottomLine, true) + '</bottomLine>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.footer == null ? '' : '<footer>' + LetterheadHeaderFooter(object.footer, true) + '</footer>'}
	${object.header == null ? '' : '<header>' + LetterheadHeaderFooter(object.header, true) + '</header>'}
	${object.middleLine == null ? '' : '<middleLine>' + LetterheadLine(object.middleLine, true) + '</middleLine>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.topLine == null ? '' : '<topLine>' + LetterheadLine(object.topLine, true) + '</topLine>'}
${rootTagEnd}`;
}