
module.exports = (object, asChild) => {
  var rootTagStart = '<MlRelatedIntent>';
  var rootTagEnd = '</MlRelatedIntent>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.relatedMlIntent == null ? '' : '<relatedMlIntent>' + object.relatedMlIntent + '</relatedMlIntent>'}
${rootTagEnd}`;
}