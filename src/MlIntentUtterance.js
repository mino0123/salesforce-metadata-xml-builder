
module.exports = (object, asChild) => {
  var rootTagStart = '<MlIntentUtterance>';
  var rootTagEnd = '</MlIntentUtterance>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.utterance == null ? '' : '<utterance>' + object.utterance + '</utterance>'}
${rootTagEnd}`;
}