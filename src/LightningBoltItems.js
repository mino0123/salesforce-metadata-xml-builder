
module.exports = (object, asChild) => {
  var rootTagStart = '<LightningBoltItems>';
  var rootTagEnd = '</LightningBoltItems>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.type == null ? '' : '<type>' + object.type + '</type>'}
${rootTagEnd}`;
}