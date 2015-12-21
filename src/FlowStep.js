const FlowConnector = require('./FlowConnector');

module.exports = (object, asChild) => {
  var rootTagStart = '<FlowStep>';
  var rootTagEnd = '</FlowStep>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.connectors == null ? '' : object.connectors.map(p => '<connectors>' + FlowConnector(p, true) + '</connectors>')}
${rootTagEnd}`;
}