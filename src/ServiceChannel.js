const ServiceChannelFieldPriority = require('./ServiceChannelFieldPriority');

module.exports = (object, asChild) => {
  var rootTagStart = '<ServiceChannel>';
  var rootTagEnd = '</ServiceChannel>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.interactionComponent == null ? '' : '<interactionComponent>' + object.interactionComponent + '</interactionComponent>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.relatedEntityType == null ? '' : '<relatedEntityType>' + object.relatedEntityType + '</relatedEntityType>'}
	${object.secondaryRoutingPriorityField == null ? '' : '<secondaryRoutingPriorityField>' + object.secondaryRoutingPriorityField + '</secondaryRoutingPriorityField>'}
	${object.serviceChannelFieldPriorities == null ? '' : object.serviceChannelFieldPriorities.map(p => '<serviceChannelFieldPriorities>' + ServiceChannelFieldPriority(p, true) + '</serviceChannelFieldPriorities>').join('')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}