const TabVisibility = require('./TabVisibility');

module.exports = (object, asChild) => {
  var rootTagStart = '<ProfileTabVisibility>';
  var rootTagEnd = '</ProfileTabVisibility>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.tab == null ? '' : '<tab>' + object.tab + '</tab>'}
	${object.visibility == null ? '' : '<visibility>' + TabVisibility(object.visibility, true) + '</visibility>'}
${rootTagEnd}`;
}