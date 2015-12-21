
module.exports = (object, asChild) => {
  var rootTagStart = '<State>';
  var rootTagEnd = '</State>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.active == null ? '' : '<active>' + object.active + '</active>'}
	${object.integrationValue == null ? '' : '<integrationValue>' + object.integrationValue + '</integrationValue>'}
	${object.isoCode == null ? '' : '<isoCode>' + object.isoCode + '</isoCode>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.standard == null ? '' : '<standard>' + object.standard + '</standard>'}
	${object.visible == null ? '' : '<visible>' + object.visible + '</visible>'}
${rootTagEnd}`;
}