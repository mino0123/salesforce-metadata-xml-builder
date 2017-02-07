
module.exports = (object, asChild) => {
  var rootTagStart = '<WaveXmdDimensionCustomAction>';
  var rootTagEnd = '</WaveXmdDimensionCustomAction>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.customActionName == null ? '' : '<customActionName>' + object.customActionName + '</customActionName>'}
	${object.enabled == null ? '' : '<enabled>' + object.enabled + '</enabled>'}
	${object.icon == null ? '' : '<icon>' + object.icon + '</icon>'}
	${object.method == null ? '' : '<method>' + object.method + '</method>'}
	${object.sortIndex == null ? '' : '<sortIndex>' + object.sortIndex + '</sortIndex>'}
	${object.target == null ? '' : '<target>' + object.target + '</target>'}
	${object.tooltip == null ? '' : '<tooltip>' + object.tooltip + '</tooltip>'}
	${object.url == null ? '' : '<url>' + object.url + '</url>'}
${rootTagEnd}`;
}