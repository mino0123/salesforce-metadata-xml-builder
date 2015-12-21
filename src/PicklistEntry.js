
module.exports = (object, asChild) => {
  var rootTagStart = '<PicklistEntry>';
  var rootTagEnd = '</PicklistEntry>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.active == null ? '' : '<active>' + object.active + '</active>'}
	${object.defaultValue == null ? '' : '<defaultValue>' + object.defaultValue + '</defaultValue>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.validFor == null ? '' : '<validFor>' + object.validFor + '</validFor>'}
	${object.value == null ? '' : '<value>' + object.value + '</value>'}
${rootTagEnd}`;
}