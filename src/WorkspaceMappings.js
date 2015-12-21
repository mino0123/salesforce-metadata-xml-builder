const WorkspaceMapping = require('./WorkspaceMapping');

module.exports = (object, asChild) => {
  var rootTagStart = '<WorkspaceMappings>';
  var rootTagEnd = '</WorkspaceMappings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.mapping == null ? '' : object.mapping.map(p => '<mapping>' + WorkspaceMapping(p, true) + '</mapping>')}
${rootTagEnd}`;
}