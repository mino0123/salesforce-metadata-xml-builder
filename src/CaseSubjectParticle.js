const CaseSubjectParticleType = require('./CaseSubjectParticleType');

module.exports = (object, asChild) => {
  var rootTagStart = '<CaseSubjectParticle>';
  var rootTagEnd = '</CaseSubjectParticle>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.index == null ? '' : '<index>' + object.index + '</index>'}
	${object.textField == null ? '' : '<textField>' + object.textField + '</textField>'}
	${object.type == null ? '' : '<type>' + CaseSubjectParticleType(object.type, true) + '</type>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}