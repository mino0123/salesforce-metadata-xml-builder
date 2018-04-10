
module.exports = (object, asChild) => {
  var rootTagStart = '<FlowCategoryItems>';
  var rootTagEnd = '</FlowCategoryItems>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.flow == null ? '' : '<flow>' + object.flow + '</flow>'}
${rootTagEnd}`;
}