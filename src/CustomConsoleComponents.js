const PrimaryTabComponents = require('./PrimaryTabComponents');
const SubtabComponents = require('./SubtabComponents');

module.exports = (object, asChild) => {
  var rootTagStart = '<CustomConsoleComponents>';
  var rootTagEnd = '</CustomConsoleComponents>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.primaryTabComponents == null ? '' : '<primaryTabComponents>' + PrimaryTabComponents(object.primaryTabComponents, true) + '</primaryTabComponents>'}
	${object.subtabComponents == null ? '' : '<subtabComponents>' + SubtabComponents(object.subtabComponents, true) + '</subtabComponents>'}
${rootTagEnd}`;
}