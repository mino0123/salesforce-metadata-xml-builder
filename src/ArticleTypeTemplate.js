const Channel = require('./Channel');
const Template = require('./Template');

module.exports = (object, asChild) => {
  var rootTagStart = '<ArticleTypeTemplate>';
  var rootTagEnd = '</ArticleTypeTemplate>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.channel == null ? '' : '<channel>' + Channel(object.channel, true) + '</channel>'}
	${object.page == null ? '' : '<page>' + object.page + '</page>'}
	${object.template == null ? '' : '<template>' + Template(object.template, true) + '</template>'}
${rootTagEnd}`;
}