
module.exports = (object, asChild) => {
  var rootTagStart = '<RemoteSiteSetting>';
  var rootTagEnd = '</RemoteSiteSetting>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.disableProtocolSecurity == null ? '' : '<disableProtocolSecurity>' + object.disableProtocolSecurity + '</disableProtocolSecurity>'}
	${object.isActive == null ? '' : '<isActive>' + object.isActive + '</isActive>'}
	${object.url == null ? '' : '<url>' + object.url + '</url>'}
${rootTagEnd}`;
}