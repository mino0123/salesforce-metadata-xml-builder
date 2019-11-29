const MlIntentUtterance = require('./MlIntentUtterance');
const MlRelatedIntent = require('./MlRelatedIntent');

module.exports = (object, asChild) => {
  var rootTagStart = '<MlIntent>';
  var rootTagEnd = '</MlIntent>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.developerName == null ? '' : '<developerName>' + object.developerName + '</developerName>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.mlIntentUtterances == null ? '' : object.mlIntentUtterances.map(p => '<mlIntentUtterances>' + MlIntentUtterance(p, true) + '</mlIntentUtterances>').join('')}
	${object.relatedMlIntents == null ? '' : object.relatedMlIntents.map(p => '<relatedMlIntents>' + MlRelatedIntent(p, true) + '</relatedMlIntents>').join('')}
${rootTagEnd}`;
}