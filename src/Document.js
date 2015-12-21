
module.exports = (object, asChild) => {
  var rootTagStart = '<Document>';
  var rootTagEnd = '</Document>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.internalUseOnly == null ? '' : '<internalUseOnly>' + object.internalUseOnly + '</internalUseOnly>'}
	${object.keywords == null ? '' : '<keywords>' + object.keywords + '</keywords>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.public == null ? '' : '<public>' + object.public + '</public>'}
${rootTagEnd}`;
}