
module.exports = (object, asChild) => {
  var rootTagStart = '<QuotasSettings>';
  var rootTagEnd = '</QuotasSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.showQuotas == null ? '' : '<showQuotas>' + object.showQuotas + '</showQuotas>'}
${rootTagEnd}`;
}