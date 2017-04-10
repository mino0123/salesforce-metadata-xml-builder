const ComponentInstanceProperty = require('./ComponentInstanceProperty');
const UiFormulaRule = require('./UiFormulaRule');

module.exports = (object, asChild) => {
  var rootTagStart = '<ComponentInstance>';
  var rootTagEnd = '</ComponentInstance>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.componentInstanceProperties == null ? '' : object.componentInstanceProperties.map(p => '<componentInstanceProperties>' + ComponentInstanceProperty(p, true) + '</componentInstanceProperties>').join('')}
	${object.componentName == null ? '' : '<componentName>' + object.componentName + '</componentName>'}
	${object.visibilityRule == null ? '' : '<visibilityRule>' + UiFormulaRule(object.visibilityRule, true) + '</visibilityRule>'}
${rootTagEnd}`;
}