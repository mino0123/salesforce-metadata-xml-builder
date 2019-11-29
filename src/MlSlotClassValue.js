const SynonymGroup = require('./SynonymGroup');

module.exports = (object, asChild) => {
  var rootTagStart = '<MlSlotClassValue>';
  var rootTagEnd = '</MlSlotClassValue>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.synonymGroup == null ? '' : '<synonymGroup>' + SynonymGroup(object.synonymGroup, true) + '</synonymGroup>'}
	${object.value == null ? '' : '<value>' + object.value + '</value>'}
${rootTagEnd}`;
}