const EventTypeParameter = require('./EventTypeParameter');

module.exports = (object, asChild) => {
  var rootTagStart = '<EventType>';
  var rootTagEnd = '</EventType>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.fields == null ? '' : object.fields.map(p => '<fields>' + EventTypeParameter(p, true) + '</fields>').join('')}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}