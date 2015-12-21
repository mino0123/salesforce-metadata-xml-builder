const ActionLinkType = require('./ActionLinkType');
const ActionLinkHttpMethod = require('./ActionLinkHttpMethod');
const ActionLinkUserVisibility = require('./ActionLinkUserVisibility');

module.exports = (object, asChild) => {
  var rootTagStart = '<ActionLinkTemplate>';
  var rootTagEnd = '</ActionLinkTemplate>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.actionUrl == null ? '' : '<actionUrl>' + object.actionUrl + '</actionUrl>'}
	${object.headers == null ? '' : '<headers>' + object.headers + '</headers>'}
	${object.isConfirmationRequired == null ? '' : '<isConfirmationRequired>' + object.isConfirmationRequired + '</isConfirmationRequired>'}
	${object.isGroupDefault == null ? '' : '<isGroupDefault>' + object.isGroupDefault + '</isGroupDefault>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.labelKey == null ? '' : '<labelKey>' + object.labelKey + '</labelKey>'}
	${object.linkType == null ? '' : '<linkType>' + ActionLinkType(object.linkType, true) + '</linkType>'}
	${object.method == null ? '' : '<method>' + ActionLinkHttpMethod(object.method, true) + '</method>'}
	${object.position == null ? '' : '<position>' + object.position + '</position>'}
	${object.requestBody == null ? '' : '<requestBody>' + object.requestBody + '</requestBody>'}
	${object.userAlias == null ? '' : '<userAlias>' + object.userAlias + '</userAlias>'}
	${object.userVisibility == null ? '' : '<userVisibility>' + ActionLinkUserVisibility(object.userVisibility, true) + '</userVisibility>'}
${rootTagEnd}`;
}