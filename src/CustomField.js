const DeleteConstraint = require('./DeleteConstraint');
const FieldManageability = require('./FieldManageability');
const TreatBlanksAs = require('./TreatBlanksAs');
const LookupFilter = require('./LookupFilter');
const EncryptedFieldMaskChar = require('./EncryptedFieldMaskChar');
const EncryptedFieldMaskType = require('./EncryptedFieldMaskType');
const Picklist = require('./Picklist');
const FilterItem = require('./FilterItem');
const SummaryOperations = require('./SummaryOperations');
const FieldType = require('./FieldType');
const ValueSet = require('./ValueSet');

module.exports = (object, asChild) => {
  var rootTagStart = '<CustomField>';
  var rootTagEnd = '</CustomField>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.caseSensitive == null ? '' : '<caseSensitive>' + object.caseSensitive + '</caseSensitive>'}
	${object.customDataType == null ? '' : '<customDataType>' + object.customDataType + '</customDataType>'}
	${object.defaultValue == null ? '' : '<defaultValue>' + object.defaultValue + '</defaultValue>'}
	${object.deleteConstraint == null ? '' : '<deleteConstraint>' + DeleteConstraint(object.deleteConstraint, true) + '</deleteConstraint>'}
	${object.deprecated == null ? '' : '<deprecated>' + object.deprecated + '</deprecated>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.displayFormat == null ? '' : '<displayFormat>' + object.displayFormat + '</displayFormat>'}
	${object.encrypted == null ? '' : '<encrypted>' + object.encrypted + '</encrypted>'}
	${object.escapeMarkup == null ? '' : '<escapeMarkup>' + object.escapeMarkup + '</escapeMarkup>'}
	${object.externalDeveloperName == null ? '' : '<externalDeveloperName>' + object.externalDeveloperName + '</externalDeveloperName>'}
	${object.externalId == null ? '' : '<externalId>' + object.externalId + '</externalId>'}
	${object.fieldManageability == null ? '' : '<fieldManageability>' + FieldManageability(object.fieldManageability, true) + '</fieldManageability>'}
	${object.formula == null ? '' : '<formula>' + object.formula + '</formula>'}
	${object.formulaTreatBlanksAs == null ? '' : '<formulaTreatBlanksAs>' + TreatBlanksAs(object.formulaTreatBlanksAs, true) + '</formulaTreatBlanksAs>'}
	${object.inlineHelpText == null ? '' : '<inlineHelpText>' + object.inlineHelpText + '</inlineHelpText>'}
	${object.isConvertLeadDisabled == null ? '' : '<isConvertLeadDisabled>' + object.isConvertLeadDisabled + '</isConvertLeadDisabled>'}
	${object.isFilteringDisabled == null ? '' : '<isFilteringDisabled>' + object.isFilteringDisabled + '</isFilteringDisabled>'}
	${object.isNameField == null ? '' : '<isNameField>' + object.isNameField + '</isNameField>'}
	${object.isSortingDisabled == null ? '' : '<isSortingDisabled>' + object.isSortingDisabled + '</isSortingDisabled>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.length == null ? '' : '<length>' + object.length + '</length>'}
	${object.lookupFilter == null ? '' : '<lookupFilter>' + LookupFilter(object.lookupFilter, true) + '</lookupFilter>'}
	${object.maskChar == null ? '' : '<maskChar>' + EncryptedFieldMaskChar(object.maskChar, true) + '</maskChar>'}
	${object.maskType == null ? '' : '<maskType>' + EncryptedFieldMaskType(object.maskType, true) + '</maskType>'}
	${object.picklist == null ? '' : '<picklist>' + Picklist(object.picklist, true) + '</picklist>'}
	${object.populateExistingRows == null ? '' : '<populateExistingRows>' + object.populateExistingRows + '</populateExistingRows>'}
	${object.precision == null ? '' : '<precision>' + object.precision + '</precision>'}
	${object.referenceTargetField == null ? '' : '<referenceTargetField>' + object.referenceTargetField + '</referenceTargetField>'}
	${object.referenceTo == null ? '' : '<referenceTo>' + object.referenceTo + '</referenceTo>'}
	${object.relationshipLabel == null ? '' : '<relationshipLabel>' + object.relationshipLabel + '</relationshipLabel>'}
	${object.relationshipName == null ? '' : '<relationshipName>' + object.relationshipName + '</relationshipName>'}
	${object.relationshipOrder == null ? '' : '<relationshipOrder>' + object.relationshipOrder + '</relationshipOrder>'}
	${object.reparentableMasterDetail == null ? '' : '<reparentableMasterDetail>' + object.reparentableMasterDetail + '</reparentableMasterDetail>'}
	${object.required == null ? '' : '<required>' + object.required + '</required>'}
	${object.restrictedAdminField == null ? '' : '<restrictedAdminField>' + object.restrictedAdminField + '</restrictedAdminField>'}
	${object.scale == null ? '' : '<scale>' + object.scale + '</scale>'}
	${object.startingNumber == null ? '' : '<startingNumber>' + object.startingNumber + '</startingNumber>'}
	${object.stripMarkup == null ? '' : '<stripMarkup>' + object.stripMarkup + '</stripMarkup>'}
	${object.summarizedField == null ? '' : '<summarizedField>' + object.summarizedField + '</summarizedField>'}
	${object.summaryFilterItems == null ? '' : object.summaryFilterItems.map(p => '<summaryFilterItems>' + FilterItem(p, true) + '</summaryFilterItems>').join('')}
	${object.summaryForeignKey == null ? '' : '<summaryForeignKey>' + object.summaryForeignKey + '</summaryForeignKey>'}
	${object.summaryOperation == null ? '' : '<summaryOperation>' + SummaryOperations(object.summaryOperation, true) + '</summaryOperation>'}
	${object.trackFeedHistory == null ? '' : '<trackFeedHistory>' + object.trackFeedHistory + '</trackFeedHistory>'}
	${object.trackHistory == null ? '' : '<trackHistory>' + object.trackHistory + '</trackHistory>'}
	${object.trackTrending == null ? '' : '<trackTrending>' + object.trackTrending + '</trackTrending>'}
	${object.type == null ? '' : '<type>' + FieldType(object.type, true) + '</type>'}
	${object.unique == null ? '' : '<unique>' + object.unique + '</unique>'}
	${object.valueSet == null ? '' : '<valueSet>' + ValueSet(object.valueSet, true) + '</valueSet>'}
	${object.visibleLines == null ? '' : '<visibleLines>' + object.visibleLines + '</visibleLines>'}
	${object.writeRequiresMasterRead == null ? '' : '<writeRequiresMasterRead>' + object.writeRequiresMasterRead + '</writeRequiresMasterRead>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}