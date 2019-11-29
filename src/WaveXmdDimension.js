const WaveXmdFormattingProperty = require('./WaveXmdFormattingProperty');
const WaveXmdDimensionCustomAction = require('./WaveXmdDimensionCustomAction');
const WaveXmdDimensionMember = require('./WaveXmdDimensionMember');
const WaveXmdRecordDisplayLookup = require('./WaveXmdRecordDisplayLookup');
const WaveXmdDimensionSalesforceAction = require('./WaveXmdDimensionSalesforceAction');

module.exports = (object, asChild) => {
  var rootTagStart = '<WaveXmdDimension>';
  var rootTagEnd = '</WaveXmdDimension>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.conditionalFormatting == null ? '' : object.conditionalFormatting.map(p => '<conditionalFormatting>' + WaveXmdFormattingProperty(p, true) + '</conditionalFormatting>').join('')}
	${object.customActions == null ? '' : object.customActions.map(p => '<customActions>' + WaveXmdDimensionCustomAction(p, true) + '</customActions>').join('')}
	${object.customActionsEnabled == null ? '' : '<customActionsEnabled>' + object.customActionsEnabled + '</customActionsEnabled>'}
	${object.dateFormat == null ? '' : '<dateFormat>' + object.dateFormat + '</dateFormat>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.field == null ? '' : '<field>' + object.field + '</field>'}
	${object.fullyQualifiedName == null ? '' : '<fullyQualifiedName>' + object.fullyQualifiedName + '</fullyQualifiedName>'}
	${object.imageTemplate == null ? '' : '<imageTemplate>' + object.imageTemplate + '</imageTemplate>'}
	${object.isDerived == null ? '' : '<isDerived>' + object.isDerived + '</isDerived>'}
	${object.isMultiValue == null ? '' : '<isMultiValue>' + object.isMultiValue + '</isMultiValue>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.linkTemplate == null ? '' : '<linkTemplate>' + object.linkTemplate + '</linkTemplate>'}
	${object.linkTemplateEnabled == null ? '' : '<linkTemplateEnabled>' + object.linkTemplateEnabled + '</linkTemplateEnabled>'}
	${object.linkTooltip == null ? '' : '<linkTooltip>' + object.linkTooltip + '</linkTooltip>'}
	${object.members == null ? '' : object.members.map(p => '<members>' + WaveXmdDimensionMember(p, true) + '</members>').join('')}
	${object.origin == null ? '' : '<origin>' + object.origin + '</origin>'}
	${object.recordDisplayFields == null ? '' : object.recordDisplayFields.map(p => '<recordDisplayFields>' + WaveXmdRecordDisplayLookup(p, true) + '</recordDisplayFields>').join('')}
	${object.recordIdField == null ? '' : '<recordIdField>' + object.recordIdField + '</recordIdField>'}
	${object.recordOrganizationIdField == null ? '' : '<recordOrganizationIdField>' + object.recordOrganizationIdField + '</recordOrganizationIdField>'}
	${object.salesforceActions == null ? '' : object.salesforceActions.map(p => '<salesforceActions>' + WaveXmdDimensionSalesforceAction(p, true) + '</salesforceActions>').join('')}
	${object.salesforceActionsEnabled == null ? '' : '<salesforceActionsEnabled>' + object.salesforceActionsEnabled + '</salesforceActionsEnabled>'}
	${object.showDetailsDefaultFieldIndex == null ? '' : '<showDetailsDefaultFieldIndex>' + object.showDetailsDefaultFieldIndex + '</showDetailsDefaultFieldIndex>'}
	${object.showInExplorer == null ? '' : '<showInExplorer>' + object.showInExplorer + '</showInExplorer>'}
	${object.sortIndex == null ? '' : '<sortIndex>' + object.sortIndex + '</sortIndex>'}
${rootTagEnd}`;
}