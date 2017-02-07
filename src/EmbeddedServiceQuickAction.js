
module.exports = (object, asChild) => {
  var rootTagStart = '<EmbeddedServiceQuickAction>';
  var rootTagEnd = '</EmbeddedServiceQuickAction>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.embeddedServiceLiveAgent == null ? '' : '<embeddedServiceLiveAgent>' + object.embeddedServiceLiveAgent + '</embeddedServiceLiveAgent>'}
	${object.order == null ? '' : '<order>' + object.order + '</order>'}
	${object.quickActionDefinition == null ? '' : '<quickActionDefinition>' + object.quickActionDefinition + '</quickActionDefinition>'}
${rootTagEnd}`;
}