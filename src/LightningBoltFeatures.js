
module.exports = (object, asChild) => {
  var rootTagStart = '<LightningBoltFeatures>';
  var rootTagEnd = '</LightningBoltFeatures>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.order == null ? '' : '<order>' + object.order + '</order>'}
	${object.title == null ? '' : '<title>' + object.title + '</title>'}
${rootTagEnd}`;
}