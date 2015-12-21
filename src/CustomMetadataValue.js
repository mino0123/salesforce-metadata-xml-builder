
module.exports = (object, asChild) => {
  var rootTagStart = '<CustomMetadataValue>';
  var rootTagEnd = '</CustomMetadataValue>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.field == null ? '' : '<field>' + object.field + '</field>'}
	${object.value == null ? '' : '<value>' + object.value + '</value>'}
${rootTagEnd}`;
}