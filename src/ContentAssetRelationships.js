const ContentAssetLink = require('./ContentAssetLink');

module.exports = (object, asChild) => {
  var rootTagStart = '<ContentAssetRelationships>';
  var rootTagEnd = '</ContentAssetRelationships>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.insightsApplication == null ? '' : object.insightsApplication.map(p => '<insightsApplication>' + ContentAssetLink(p, true) + '</insightsApplication>').join('')}
	${object.network == null ? '' : object.network.map(p => '<network>' + ContentAssetLink(p, true) + '</network>').join('')}
	${object.organization == null ? '' : '<organization>' + ContentAssetLink(object.organization, true) + '</organization>'}
	${object.workspace == null ? '' : object.workspace.map(p => '<workspace>' + ContentAssetLink(p, true) + '</workspace>').join('')}
${rootTagEnd}`;
}