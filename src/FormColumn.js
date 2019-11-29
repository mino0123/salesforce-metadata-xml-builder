const FormItem = require('./FormItem');

module.exports = (object, asChild) => {
  var rootTagStart = '<FormColumn>';
  var rootTagEnd = '</FormColumn>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.formItems == null ? '' : object.formItems.map(p => '<formItems>' + FormItem(p, true) + '</formItems>').join('')}
${rootTagEnd}`;
}