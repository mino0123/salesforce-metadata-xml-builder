const State = require('./State');

module.exports = (object, asChild) => {
  var rootTagStart = '<Country>';
  var rootTagEnd = '</Country>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.active == null ? '' : '<active>' + object.active + '</active>'}
	${object.integrationValue == null ? '' : '<integrationValue>' + object.integrationValue + '</integrationValue>'}
	${object.isoCode == null ? '' : '<isoCode>' + object.isoCode + '</isoCode>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.orgDefault == null ? '' : '<orgDefault>' + object.orgDefault + '</orgDefault>'}
	${object.standard == null ? '' : '<standard>' + object.standard + '</standard>'}
	${object.states == null ? '' : object.states.map(p => '<states>' + State(p, true) + '</states>')}
	${object.visible == null ? '' : '<visible>' + object.visible + '</visible>'}
${rootTagEnd}`;
}