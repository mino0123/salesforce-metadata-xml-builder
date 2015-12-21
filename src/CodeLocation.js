
module.exports = (object, asChild) => {
  var rootTagStart = '<CodeLocation>';
  var rootTagEnd = '</CodeLocation>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.column == null ? '' : '<column>' + object.column + '</column>'}
	${object.line == null ? '' : '<line>' + object.line + '</line>'}
	${object.numExecutions == null ? '' : '<numExecutions>' + object.numExecutions + '</numExecutions>'}
	${object.time == null ? '' : '<time>' + object.time + '</time>'}
${rootTagEnd}`;
}