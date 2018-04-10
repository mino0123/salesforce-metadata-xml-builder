const CustomShortcut = require('./CustomShortcut');
const DefaultShortcut = require('./DefaultShortcut');

module.exports = (object, asChild) => {
  var rootTagStart = '<KeyboardShortcuts>';
  var rootTagEnd = '</KeyboardShortcuts>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.customShortcuts == null ? '' : object.customShortcuts.map(p => '<customShortcuts>' + CustomShortcut(p, true) + '</customShortcuts>').join('')}
	${object.defaultShortcuts == null ? '' : object.defaultShortcuts.map(p => '<defaultShortcuts>' + DefaultShortcut(p, true) + '</defaultShortcuts>').join('')}
${rootTagEnd}`;
}