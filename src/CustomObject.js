const ActionOverride = require('./ActionOverride');
const ArticleTypeChannelDisplay = require('./ArticleTypeChannelDisplay');
const BusinessProcess = require('./BusinessProcess');
const CompactLayout = require('./CompactLayout');
const CustomSettingsType = require('./CustomSettingsType');
const DeploymentStatus = require('./DeploymentStatus');
const SharingModel = require('./SharingModel');
const FieldSet = require('./FieldSet');
const CustomField = require('./CustomField');
const Gender = require('./Gender');
const HistoryRetentionPolicy = require('./HistoryRetentionPolicy');
const Index = require('./Index');
const ListView = require('./ListView');
const RecordType = require('./RecordType');
const SearchLayouts = require('./SearchLayouts');
const SharingReason = require('./SharingReason');
const SharingRecalculation = require('./SharingRecalculation');
const StartsWith = require('./StartsWith');
const ValidationRule = require('./ValidationRule');
const SetupObjectVisibility = require('./SetupObjectVisibility');
const WebLink = require('./WebLink');

module.exports = (object, asChild) => {
  var rootTagStart = '<CustomObject>';
  var rootTagEnd = '</CustomObject>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.actionOverrides == null ? '' : object.actionOverrides.map(p => '<actionOverrides>' + ActionOverride(p, true) + '</actionOverrides>').join('')}
	${object.allowInChatterGroups == null ? '' : '<allowInChatterGroups>' + object.allowInChatterGroups + '</allowInChatterGroups>'}
	${object.articleTypeChannelDisplay == null ? '' : '<articleTypeChannelDisplay>' + ArticleTypeChannelDisplay(object.articleTypeChannelDisplay, true) + '</articleTypeChannelDisplay>'}
	${object.businessProcesses == null ? '' : object.businessProcesses.map(p => '<businessProcesses>' + BusinessProcess(p, true) + '</businessProcesses>').join('')}
	${object.compactLayoutAssignment == null ? '' : '<compactLayoutAssignment>' + object.compactLayoutAssignment + '</compactLayoutAssignment>'}
	${object.compactLayouts == null ? '' : object.compactLayouts.map(p => '<compactLayouts>' + CompactLayout(p, true) + '</compactLayouts>').join('')}
	${object.customHelp == null ? '' : '<customHelp>' + object.customHelp + '</customHelp>'}
	${object.customHelpPage == null ? '' : '<customHelpPage>' + object.customHelpPage + '</customHelpPage>'}
	${object.customSettingsType == null ? '' : '<customSettingsType>' + CustomSettingsType(object.customSettingsType, true) + '</customSettingsType>'}
	${object.deploymentStatus == null ? '' : '<deploymentStatus>' + DeploymentStatus(object.deploymentStatus, true) + '</deploymentStatus>'}
	${object.deprecated == null ? '' : '<deprecated>' + object.deprecated + '</deprecated>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.enableActivities == null ? '' : '<enableActivities>' + object.enableActivities + '</enableActivities>'}
	${object.enableBulkApi == null ? '' : '<enableBulkApi>' + object.enableBulkApi + '</enableBulkApi>'}
	${object.enableDivisions == null ? '' : '<enableDivisions>' + object.enableDivisions + '</enableDivisions>'}
	${object.enableEnhancedLookup == null ? '' : '<enableEnhancedLookup>' + object.enableEnhancedLookup + '</enableEnhancedLookup>'}
	${object.enableFeeds == null ? '' : '<enableFeeds>' + object.enableFeeds + '</enableFeeds>'}
	${object.enableHistory == null ? '' : '<enableHistory>' + object.enableHistory + '</enableHistory>'}
	${object.enableReports == null ? '' : '<enableReports>' + object.enableReports + '</enableReports>'}
	${object.enableSearch == null ? '' : '<enableSearch>' + object.enableSearch + '</enableSearch>'}
	${object.enableSharing == null ? '' : '<enableSharing>' + object.enableSharing + '</enableSharing>'}
	${object.enableStreamingApi == null ? '' : '<enableStreamingApi>' + object.enableStreamingApi + '</enableStreamingApi>'}
	${object.externalDataSource == null ? '' : '<externalDataSource>' + object.externalDataSource + '</externalDataSource>'}
	${object.externalName == null ? '' : '<externalName>' + object.externalName + '</externalName>'}
	${object.externalRepository == null ? '' : '<externalRepository>' + object.externalRepository + '</externalRepository>'}
	${object.externalSharingModel == null ? '' : '<externalSharingModel>' + SharingModel(object.externalSharingModel, true) + '</externalSharingModel>'}
	${object.fieldSets == null ? '' : object.fieldSets.map(p => '<fieldSets>' + FieldSet(p, true) + '</fieldSets>').join('')}
	${object.fields == null ? '' : object.fields.map(p => '<fields>' + CustomField(p, true) + '</fields>').join('')}
	${object.gender == null ? '' : '<gender>' + Gender(object.gender, true) + '</gender>'}
	${object.historyRetentionPolicy == null ? '' : '<historyRetentionPolicy>' + HistoryRetentionPolicy(object.historyRetentionPolicy, true) + '</historyRetentionPolicy>'}
	${object.household == null ? '' : '<household>' + object.household + '</household>'}
	${object.indexes == null ? '' : object.indexes.map(p => '<indexes>' + Index(p, true) + '</indexes>').join('')}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.listViews == null ? '' : object.listViews.map(p => '<listViews>' + ListView(p, true) + '</listViews>').join('')}
	${object.nameField == null ? '' : '<nameField>' + CustomField(object.nameField, true) + '</nameField>'}
	${object.pluralLabel == null ? '' : '<pluralLabel>' + object.pluralLabel + '</pluralLabel>'}
	${object.recordTypeTrackFeedHistory == null ? '' : '<recordTypeTrackFeedHistory>' + object.recordTypeTrackFeedHistory + '</recordTypeTrackFeedHistory>'}
	${object.recordTypeTrackHistory == null ? '' : '<recordTypeTrackHistory>' + object.recordTypeTrackHistory + '</recordTypeTrackHistory>'}
	${object.recordTypes == null ? '' : object.recordTypes.map(p => '<recordTypes>' + RecordType(p, true) + '</recordTypes>').join('')}
	${object.searchLayouts == null ? '' : '<searchLayouts>' + SearchLayouts(object.searchLayouts, true) + '</searchLayouts>'}
	${object.sharingModel == null ? '' : '<sharingModel>' + SharingModel(object.sharingModel, true) + '</sharingModel>'}
	${object.sharingReasons == null ? '' : object.sharingReasons.map(p => '<sharingReasons>' + SharingReason(p, true) + '</sharingReasons>').join('')}
	${object.sharingRecalculations == null ? '' : object.sharingRecalculations.map(p => '<sharingRecalculations>' + SharingRecalculation(p, true) + '</sharingRecalculations>').join('')}
	${object.startsWith == null ? '' : '<startsWith>' + StartsWith(object.startsWith, true) + '</startsWith>'}
	${object.validationRules == null ? '' : object.validationRules.map(p => '<validationRules>' + ValidationRule(p, true) + '</validationRules>').join('')}
	${object.visibility == null ? '' : '<visibility>' + SetupObjectVisibility(object.visibility, true) + '</visibility>'}
	${object.webLinks == null ? '' : object.webLinks.map(p => '<webLinks>' + WebLink(p, true) + '</webLinks>').join('')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}