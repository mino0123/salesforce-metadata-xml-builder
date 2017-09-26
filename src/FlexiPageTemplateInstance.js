const ComponentInstanceProperty = require('./ComponentInstanceProperty');

module.exports = (object, asChild) => {
  var rootTagStart = '<FlexiPageTemplateInstance>';
  var rootTagEnd = '</FlexiPageTemplateInstance>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.properties == null ? '' : object.properties.map(p => '<properties>' + ComponentInstanceProperty(p, true) + '</properties>').join('')}
${rootTagEnd}`;
}