const ID = require('./ID');

module.exports = (object, asChild) => {
  var rootTagStart = '<RunTestFailure>';
  var rootTagEnd = '</RunTestFailure>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.id == null ? '' : '<id>' + ID(object.id, true) + '</id>'}
	${object.message == null ? '' : '<message>' + object.message + '</message>'}
	${object.methodName == null ? '' : '<methodName>' + object.methodName + '</methodName>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.namespace == null ? '' : '<namespace>' + object.namespace + '</namespace>'}
	${object.packageName == null ? '' : '<packageName>' + object.packageName + '</packageName>'}
	${object.seeAllData == null ? '' : '<seeAllData>' + object.seeAllData + '</seeAllData>'}
	${object.stackTrace == null ? '' : '<stackTrace>' + object.stackTrace + '</stackTrace>'}
	${object.time == null ? '' : '<time>' + object.time + '</time>'}
	${object.type == null ? '' : '<type>' + object.type + '</type>'}
${rootTagEnd}`;
}