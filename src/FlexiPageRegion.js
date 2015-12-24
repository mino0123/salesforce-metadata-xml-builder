const RegionFlagStatus = require('./RegionFlagStatus');
const ComponentInstance = require('./ComponentInstance');
const FlexiPageRegionMode = require('./FlexiPageRegionMode');
const FlexiPageRegionType = require('./FlexiPageRegionType');

module.exports = (object, asChild) => {
  var rootTagStart = '<FlexiPageRegion>';
  var rootTagEnd = '</FlexiPageRegion>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.appendable == null ? '' : '<appendable>' + RegionFlagStatus(object.appendable, true) + '</appendable>'}
	${object.componentInstances == null ? '' : object.componentInstances.map(p => '<componentInstances>' + ComponentInstance(p, true) + '</componentInstances>').join('')}
	${object.mode == null ? '' : '<mode>' + FlexiPageRegionMode(object.mode, true) + '</mode>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.prependable == null ? '' : '<prependable>' + RegionFlagStatus(object.prependable, true) + '</prependable>'}
	${object.replaceable == null ? '' : '<replaceable>' + RegionFlagStatus(object.replaceable, true) + '</replaceable>'}
	${object.type == null ? '' : '<type>' + FlexiPageRegionType(object.type, true) + '</type>'}
${rootTagEnd}`;
}