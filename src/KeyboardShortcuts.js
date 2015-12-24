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
	${object.customShortcut == null ? '' : object.customShortcut.map(p => '<customShortcut>' + CustomShortcut(p, true) + '</customShortcut>').join('')}
	${object.defaultShortcut == null ? '' : object.defaultShortcut.map(p => '<defaultShortcut>' + DefaultShortcut(p, true) + '</defaultShortcut>').join('')}
${rootTagEnd}`;
}