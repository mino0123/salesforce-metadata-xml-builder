const PersonalizationTargetInfo = require('./PersonalizationTargetInfo');

module.exports = (object, asChild) => {
  var rootTagStart = '<PersonalizationTargetInfos>';
  var rootTagEnd = '</PersonalizationTargetInfos>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.target == null ? '' : object.target.map(p => '<target>' + PersonalizationTargetInfo(p, true) + '</target>').join('')}
${rootTagEnd}`;
}