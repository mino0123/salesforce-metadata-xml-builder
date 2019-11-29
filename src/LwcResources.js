const LwcResource = require('./LwcResource');

module.exports = (object, asChild) => {
  var rootTagStart = '<LwcResources>';
  var rootTagEnd = '</LwcResources>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.lwcResource == null ? '' : object.lwcResource.map(p => '<lwcResource>' + LwcResource(p, true) + '</lwcResource>').join('')}
${rootTagEnd}`;
}