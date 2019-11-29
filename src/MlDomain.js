const MlIntent = require('./MlIntent');
const MlSlotClass = require('./MlSlotClass');

module.exports = (object, asChild) => {
  var rootTagStart = '<MlDomain>';
  var rootTagEnd = '</MlDomain>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.mlIntents == null ? '' : object.mlIntents.map(p => '<mlIntents>' + MlIntent(p, true) + '</mlIntents>').join('')}
	${object.mlSlotClasses == null ? '' : object.mlSlotClasses.map(p => '<mlSlotClasses>' + MlSlotClass(p, true) + '</mlSlotClasses>').join('')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}