
module.exports = (object, asChild) => {
  var rootTagStart = '<TouchMobileSettings>';
  var rootTagEnd = '</TouchMobileSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableTouchAppIPad == null ? '' : '<enableTouchAppIPad>' + object.enableTouchAppIPad + '</enableTouchAppIPad>'}
	${object.enableTouchAppIPhone == null ? '' : '<enableTouchAppIPhone>' + object.enableTouchAppIPhone + '</enableTouchAppIPhone>'}
	${object.enableTouchBrowserIPad == null ? '' : '<enableTouchBrowserIPad>' + object.enableTouchBrowserIPad + '</enableTouchBrowserIPad>'}
	${object.enableTouchIosPhone == null ? '' : '<enableTouchIosPhone>' + object.enableTouchIosPhone + '</enableTouchIosPhone>'}
	${object.enableVisualforceInTouch == null ? '' : '<enableVisualforceInTouch>' + object.enableVisualforceInTouch + '</enableVisualforceInTouch>'}
${rootTagEnd}`;
}