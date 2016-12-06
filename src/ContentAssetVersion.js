
module.exports = (object, asChild) => {
  var rootTagStart = '<ContentAssetVersion>';
  var rootTagEnd = '</ContentAssetVersion>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.number == null ? '' : '<number>' + object.number + '</number>'}
	${object.pathOnClient == null ? '' : '<pathOnClient>' + object.pathOnClient + '</pathOnClient>'}
	${object.zipEntry == null ? '' : '<zipEntry>' + object.zipEntry + '</zipEntry>'}
${rootTagEnd}`;
}