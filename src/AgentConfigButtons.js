
module.exports = (object, asChild) => {
  var rootTagStart = '<AgentConfigButtons>';
  var rootTagEnd = '</AgentConfigButtons>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.button == null ? '' : object.button.map(p => '<button>' + p + '</button>').join('')}
${rootTagEnd}`;
}