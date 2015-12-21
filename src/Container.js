const SidebarComponent = require('./SidebarComponent');

module.exports = (object, asChild) => {
  var rootTagStart = '<Container>';
  var rootTagEnd = '</Container>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.height == null ? '' : '<height>' + object.height + '</height>'}
	${object.isContainerAutoSizeEnabled == null ? '' : '<isContainerAutoSizeEnabled>' + object.isContainerAutoSizeEnabled + '</isContainerAutoSizeEnabled>'}
	${object.region == null ? '' : '<region>' + object.region + '</region>'}
	${object.sidebarComponents == null ? '' : object.sidebarComponents.map(p => '<sidebarComponents>' + SidebarComponent(p, true) + '</sidebarComponents>')}
	${object.style == null ? '' : '<style>' + object.style + '</style>'}
	${object.unit == null ? '' : '<unit>' + object.unit + '</unit>'}
	${object.width == null ? '' : '<width>' + object.width + '</width>'}
${rootTagEnd}`;
}