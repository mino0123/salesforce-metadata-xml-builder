
module.exports = (object, asChild) => {
  var rootTagStart = '<LwcResource>';
  var rootTagEnd = '</LwcResource>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.filePath == null ? '' : '<filePath>' + object.filePath + '</filePath>'}
	${object.source == null ? '' : '<source>' + object.source + '</source>'}
${rootTagEnd}`;
}