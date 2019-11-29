const CommandActionResponse = require('./CommandActionResponse');

module.exports = (object, asChild) => {
  var rootTagStart = '<CommandActionIntent>';
  var rootTagEnd = '</CommandActionIntent>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.phrase == null ? '' : '<phrase>' + object.phrase + '</phrase>'}
	${object.responseTemplates == null ? '' : object.responseTemplates.map(p => '<responseTemplates>' + CommandActionResponse(p, true) + '</responseTemplates>').join('')}
${rootTagEnd}`;
}