
module.exports = (object, asChild) => {
  var rootTagStart = '<BlockchainSettings>';
  var rootTagEnd = '</BlockchainSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableBcp == null ? '' : '<enableBcp>' + object.enableBcp + '</enableBcp>'}
	${object.enableBcpCoin == null ? '' : '<enableBcpCoin>' + object.enableBcpCoin + '</enableBcpCoin>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}