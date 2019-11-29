const MlIntent = require('./MlIntent');
const MlSlotClass = require('./MlSlotClass');

module.exports = (object, asChild) => {
  var rootTagStart = '<LocalMlDomain>';
  var rootTagEnd = '</LocalMlDomain>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.mlIntents == null ? '' : object.mlIntents.map(p => '<mlIntents>' + MlIntent(p, true) + '</mlIntents>').join('')}
	${object.mlSlotClasses == null ? '' : object.mlSlotClasses.map(p => '<mlSlotClasses>' + MlSlotClass(p, true) + '</mlSlotClasses>').join('')}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
${rootTagEnd}`;
}