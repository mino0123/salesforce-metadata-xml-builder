
module.exports = (object, asChild) => {
  var rootTagStart = '<CommandActionResponse>';
  var rootTagEnd = '</CommandActionResponse>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.template == null ? '' : '<template>' + object.template + '</template>'}
${rootTagEnd}`;
}