
module.exports = (object, asChild) => {
  var rootTagStart = '<DomainWhitelist>';
  var rootTagEnd = '</DomainWhitelist>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.domain == null ? '' : object.domain.map(p => '<domain>' + p + '</domain>').join('')}
${rootTagEnd}`;
}