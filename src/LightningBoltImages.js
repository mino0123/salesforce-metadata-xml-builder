
module.exports = (object, asChild) => {
  var rootTagStart = '<LightningBoltImages>';
  var rootTagEnd = '</LightningBoltImages>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.image == null ? '' : '<image>' + object.image + '</image>'}
	${object.order == null ? '' : '<order>' + object.order + '</order>'}
${rootTagEnd}`;
}