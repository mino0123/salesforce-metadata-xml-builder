const ObjectRelationship = require('./ObjectRelationship');

module.exports = (object, asChild) => {
  var rootTagStart = '<ObjectRelationship>';
  var rootTagEnd = '</ObjectRelationship>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.join == null ? '' : '<join>' + ObjectRelationship(object.join, true) + '</join>'}
	${object.outerJoin == null ? '' : '<outerJoin>' + object.outerJoin + '</outerJoin>'}
	${object.relationship == null ? '' : '<relationship>' + object.relationship + '</relationship>'}
${rootTagEnd}`;
}