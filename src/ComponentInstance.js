const ComponentInstanceProperty = require('./ComponentInstanceProperty');

module.exports = (object, asChild) => {
  var rootTagStart = '<ComponentInstance>';
  var rootTagEnd = '</ComponentInstance>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.componentInstanceProperties == null ? '' : object.componentInstanceProperties.map(p => '<componentInstanceProperties>' + ComponentInstanceProperty(p, true) + '</componentInstanceProperties>')}
	${object.componentName == null ? '' : '<componentName>' + object.componentName + '</componentName>'}
${rootTagEnd}`;
}