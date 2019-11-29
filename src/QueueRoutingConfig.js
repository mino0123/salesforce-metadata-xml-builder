const RoutingModel = require('./RoutingModel');

module.exports = (object, asChild) => {
  var rootTagStart = '<QueueRoutingConfig>';
  var rootTagEnd = '</QueueRoutingConfig>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.capacityPercentage == null ? '' : '<capacityPercentage>' + object.capacityPercentage + '</capacityPercentage>'}
	${object.capacityWeight == null ? '' : '<capacityWeight>' + object.capacityWeight + '</capacityWeight>'}
	${object.dropAdditionalSkillsTimeout == null ? '' : '<dropAdditionalSkillsTimeout>' + object.dropAdditionalSkillsTimeout + '</dropAdditionalSkillsTimeout>'}
	${object.isAttributeBased == null ? '' : '<isAttributeBased>' + object.isAttributeBased + '</isAttributeBased>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.pushTimeout == null ? '' : '<pushTimeout>' + object.pushTimeout + '</pushTimeout>'}
	${object.queueOverflowAssignee == null ? '' : '<queueOverflowAssignee>' + object.queueOverflowAssignee + '</queueOverflowAssignee>'}
	${object.routingModel == null ? '' : '<routingModel>' + RoutingModel(object.routingModel, true) + '</routingModel>'}
	${object.routingPriority == null ? '' : '<routingPriority>' + object.routingPriority + '</routingPriority>'}
	${object.userOverflowAssignee == null ? '' : '<userOverflowAssignee>' + object.userOverflowAssignee + '</userOverflowAssignee>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}