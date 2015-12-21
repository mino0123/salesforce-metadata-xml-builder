const ReputationBranding = require('./ReputationBranding');

module.exports = (object, asChild) => {
  var rootTagStart = '<ReputationLevel>';
  var rootTagEnd = '</ReputationLevel>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.branding == null ? '' : '<branding>' + ReputationBranding(object.branding, true) + '</branding>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.lowerThreshold == null ? '' : '<lowerThreshold>' + object.lowerThreshold + '</lowerThreshold>'}
${rootTagEnd}`;
}