
module.exports = (object, asChild) => {
  var rootTagStart = '<NextAutomatedApprover>';
  var rootTagEnd = '</NextAutomatedApprover>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.useApproverFieldOfRecordOwner == null ? '' : '<useApproverFieldOfRecordOwner>' + object.useApproverFieldOfRecordOwner + '</useApproverFieldOfRecordOwner>'}
	${object.userHierarchyField == null ? '' : '<userHierarchyField>' + object.userHierarchyField + '</userHierarchyField>'}
${rootTagEnd}`;
}