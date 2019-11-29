
module.exports = (object, asChild) => {
  var rootTagStart = '<AccountRelationshipShareRule>';
  var rootTagEnd = '</AccountRelationshipShareRule>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.accessLevel == null ? '' : '<accessLevel>' + object.accessLevel + '</accessLevel>'}
	${object.accountToCriteriaField == null ? '' : '<accountToCriteriaField>' + object.accountToCriteriaField + '</accountToCriteriaField>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.entityType == null ? '' : '<entityType>' + object.entityType + '</entityType>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.staticFormulaCriteria == null ? '' : '<staticFormulaCriteria>' + object.staticFormulaCriteria + '</staticFormulaCriteria>'}
	${object.type == null ? '' : '<type>' + object.type + '</type>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}