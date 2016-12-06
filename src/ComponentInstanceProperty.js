const ComponentInstancePropertyTypeEnum = require('./ComponentInstancePropertyTypeEnum');

module.exports = (object, asChild) => {
  var rootTagStart = '<ComponentInstanceProperty>';
  var rootTagEnd = '</ComponentInstanceProperty>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.type == null ? '' : '<type>' + ComponentInstancePropertyTypeEnum(object.type, true) + '</type>'}
	${object.value == null ? '' : '<value>' + object.value + '</value>'}
${rootTagEnd}`;
}