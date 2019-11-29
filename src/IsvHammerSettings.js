
module.exports = (object, asChild) => {
  var rootTagStart = '<IsvHammerSettings>';
  var rootTagEnd = '</IsvHammerSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableIsvHammerSubIsOptedOut == null ? '' : '<enableIsvHammerSubIsOptedOut>' + object.enableIsvHammerSubIsOptedOut + '</enableIsvHammerSubIsOptedOut>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}