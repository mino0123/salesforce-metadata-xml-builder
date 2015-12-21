
module.exports = (object, asChild) => {
  var rootTagStart = '<WorkflowOutboundMessage>';
  var rootTagEnd = '</WorkflowOutboundMessage>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.apiVersion == null ? '' : '<apiVersion>' + object.apiVersion + '</apiVersion>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.endpointUrl == null ? '' : '<endpointUrl>' + object.endpointUrl + '</endpointUrl>'}
	${object.fields == null ? '' : object.fields.map(p => '<fields>' + p + '</fields>')}
	${object.includeSessionId == null ? '' : '<includeSessionId>' + object.includeSessionId + '</includeSessionId>'}
	${object.integrationUser == null ? '' : '<integrationUser>' + object.integrationUser + '</integrationUser>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.protected == null ? '' : '<protected>' + object.protected + '</protected>'}
	${object.useDeadLetterQueue == null ? '' : '<useDeadLetterQueue>' + object.useDeadLetterQueue + '</useDeadLetterQueue>'}
${rootTagEnd}`;
}