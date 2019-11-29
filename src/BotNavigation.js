const BotNavigationLink = require('./BotNavigationLink');
const BotNavigationType = require('./BotNavigationType');

module.exports = (object, asChild) => {
  var rootTagStart = '<BotNavigation>';
  var rootTagEnd = '</BotNavigation>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.botNavigationLinks == null ? '' : object.botNavigationLinks.map(p => '<botNavigationLinks>' + BotNavigationLink(p, true) + '</botNavigationLinks>').join('')}
	${object.type == null ? '' : '<type>' + BotNavigationType(object.type, true) + '</type>'}
${rootTagEnd}`;
}