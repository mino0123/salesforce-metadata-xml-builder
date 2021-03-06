const ReportTypeCategory = require('./ReportTypeCategory');
const ObjectRelationship = require('./ObjectRelationship');
const ReportLayoutSection = require('./ReportLayoutSection');

module.exports = (object, asChild) => {
  var rootTagStart = '<ReportType>';
  var rootTagEnd = '</ReportType>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.autogenerated == null ? '' : '<autogenerated>' + object.autogenerated + '</autogenerated>'}
	${object.baseObject == null ? '' : '<baseObject>' + object.baseObject + '</baseObject>'}
	${object.category == null ? '' : '<category>' + ReportTypeCategory(object.category, true) + '</category>'}
	${object.deployed == null ? '' : '<deployed>' + object.deployed + '</deployed>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.join == null ? '' : '<join>' + ObjectRelationship(object.join, true) + '</join>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.sections == null ? '' : object.sections.map(p => '<sections>' + ReportLayoutSection(p, true) + '</sections>').join('')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}