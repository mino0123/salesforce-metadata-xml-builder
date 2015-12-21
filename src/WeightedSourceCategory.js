
module.exports = (object, asChild) => {
  var rootTagStart = '<WeightedSourceCategory>';
  var rootTagEnd = '</WeightedSourceCategory>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.sourceCategoryApiName == null ? '' : '<sourceCategoryApiName>' + object.sourceCategoryApiName + '</sourceCategoryApiName>'}
	${object.weight == null ? '' : '<weight>' + object.weight + '</weight>'}
${rootTagEnd}`;
}