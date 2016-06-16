const FieldType = require('./FieldType');

module.exports = (object, asChild) => {
  var rootTagStart = '<EventTypeParameter>';
  var rootTagEnd = '</EventTypeParameter>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.defaultValue == null ? '' : '<defaultValue>' + object.defaultValue + '</defaultValue>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.maxOccurs == null ? '' : '<maxOccurs>' + object.maxOccurs + '</maxOccurs>'}
	${object.minOccurs == null ? '' : '<minOccurs>' + object.minOccurs + '</minOccurs>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.sObjectType == null ? '' : '<sObjectType>' + object.sObjectType + '</sObjectType>'}
	${object.type == null ? '' : '<type>' + FieldType(object.type, true) + '</type>'}
${rootTagEnd}`;
}