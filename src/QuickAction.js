const FieldOverride = require('./FieldOverride');
const QuickActionLayout = require('./QuickActionLayout');
const QuickActionLabel = require('./QuickActionLabel');
const QuickActionType = require('./QuickActionType');

module.exports = (object, asChild) => {
  var rootTagStart = '<QuickAction>';
  var rootTagEnd = '</QuickAction>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.canvas == null ? '' : '<canvas>' + object.canvas + '</canvas>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.fieldOverrides == null ? '' : object.fieldOverrides.map(p => '<fieldOverrides>' + FieldOverride(p, true) + '</fieldOverrides>')}
	${object.height == null ? '' : '<height>' + object.height + '</height>'}
	${object.icon == null ? '' : '<icon>' + object.icon + '</icon>'}
	${object.isProtected == null ? '' : '<isProtected>' + object.isProtected + '</isProtected>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.page == null ? '' : '<page>' + object.page + '</page>'}
	${object.quickActionLayout == null ? '' : '<quickActionLayout>' + QuickActionLayout(object.quickActionLayout, true) + '</quickActionLayout>'}
	${object.standardLabel == null ? '' : '<standardLabel>' + QuickActionLabel(object.standardLabel, true) + '</standardLabel>'}
	${object.targetObject == null ? '' : '<targetObject>' + object.targetObject + '</targetObject>'}
	${object.targetParentField == null ? '' : '<targetParentField>' + object.targetParentField + '</targetParentField>'}
	${object.targetRecordType == null ? '' : '<targetRecordType>' + object.targetRecordType + '</targetRecordType>'}
	${object.type == null ? '' : '<type>' + QuickActionType(object.type, true) + '</type>'}
	${object.width == null ? '' : '<width>' + object.width + '</width>'}
${rootTagEnd}`;
}