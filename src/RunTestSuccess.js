const ID = require('./ID');

module.exports = (object, asChild) => {
  var rootTagStart = '<RunTestSuccess>';
  var rootTagEnd = '</RunTestSuccess>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.id == null ? '' : '<id>' + ID(object.id, true) + '</id>'}
	${object.methodName == null ? '' : '<methodName>' + object.methodName + '</methodName>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.namespace == null ? '' : '<namespace>' + object.namespace + '</namespace>'}
	${object.seeAllData == null ? '' : '<seeAllData>' + object.seeAllData + '</seeAllData>'}
	${object.time == null ? '' : '<time>' + object.time + '</time>'}
${rootTagEnd}`;
}