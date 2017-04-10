const WorkspaceMapping = require('./WorkspaceMapping');

module.exports = (object, asChild) => {
  var rootTagStart = '<AppWorkspaceConfig>';
  var rootTagEnd = '</AppWorkspaceConfig>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.mappings == null ? '' : object.mappings.map(p => '<mappings>' + WorkspaceMapping(p, true) + '</mappings>').join('')}
${rootTagEnd}`;
}