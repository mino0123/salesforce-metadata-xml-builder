const FlowCategoryItems = require('./FlowCategoryItems');

module.exports = (object, asChild) => {
  var rootTagStart = '<FlowCategory>';
  var rootTagEnd = '</FlowCategory>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.flowCategoryItems == null ? '' : object.flowCategoryItems.map(p => '<flowCategoryItems>' + FlowCategoryItems(p, true) + '</flowCategoryItems>').join('')}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}