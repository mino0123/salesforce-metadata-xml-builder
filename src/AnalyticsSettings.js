
module.exports = (object, asChild) => {
  var rootTagStart = '<AnalyticsSettings>';
  var rootTagEnd = '</AnalyticsSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.alwaysGenPreviews == null ? '' : '<alwaysGenPreviews>' + object.alwaysGenPreviews + '</alwaysGenPreviews>'}
	${object.analyticsAdoptionMetadata == null ? '' : '<analyticsAdoptionMetadata>' + object.analyticsAdoptionMetadata + '</analyticsAdoptionMetadata>'}
	${object.canAccessAnalyticsViaAPI == null ? '' : '<canAccessAnalyticsViaAPI>' + object.canAccessAnalyticsViaAPI + '</canAccessAnalyticsViaAPI>'}
	${object.canAnnotateDashboards == null ? '' : '<canAnnotateDashboards>' + object.canAnnotateDashboards + '</canAnnotateDashboards>'}
	${object.canEnableSavedView == null ? '' : '<canEnableSavedView>' + object.canEnableSavedView + '</canEnableSavedView>'}
	${object.canExploreDataConversationally == null ? '' : '<canExploreDataConversationally>' + object.canExploreDataConversationally + '</canExploreDataConversationally>'}
	${object.canShareAppsWithCommunities == null ? '' : '<canShareAppsWithCommunities>' + object.canShareAppsWithCommunities + '</canShareAppsWithCommunities>'}
	${object.canSubscribeDashboardWidgets == null ? '' : '<canSubscribeDashboardWidgets>' + object.canSubscribeDashboardWidgets + '</canSubscribeDashboardWidgets>'}
	${object.canViewThumbnailAssets == null ? '' : '<canViewThumbnailAssets>' + object.canViewThumbnailAssets + '</canViewThumbnailAssets>'}
	${object.enableAnalyticsSubtotals == null ? '' : '<enableAnalyticsSubtotals>' + object.enableAnalyticsSubtotals + '</enableAnalyticsSubtotals>'}
	${object.enableAutoCompleteCombo == null ? '' : '<enableAutoCompleteCombo>' + object.enableAutoCompleteCombo + '</enableAutoCompleteCombo>'}
	${object.enableDashboardComponentSnapshot == null ? '' : '<enableDashboardComponentSnapshot>' + object.enableDashboardComponentSnapshot + '</enableDashboardComponentSnapshot>'}
	${object.enableDashboardFlexiTable == null ? '' : '<enableDashboardFlexiTable>' + object.enableDashboardFlexiTable + '</enableDashboardFlexiTable>'}
	${object.enableEmailReportsToPortalUsers == null ? '' : '<enableEmailReportsToPortalUsers>' + object.enableEmailReportsToPortalUsers + '</enableEmailReportsToPortalUsers>'}
	${object.enableFloatingReportHeaders == null ? '' : '<enableFloatingReportHeaders>' + object.enableFloatingReportHeaders + '</enableFloatingReportHeaders>'}
	${object.enableInsights == null ? '' : '<enableInsights>' + object.enableInsights + '</enableInsights>'}
	${object.enableLightningReportBuilder == null ? '' : '<enableLightningReportBuilder>' + object.enableLightningReportBuilder + '</enableLightningReportBuilder>'}
	${object.enableLotusNotesImages == null ? '' : '<enableLotusNotesImages>' + object.enableLotusNotesImages + '</enableLotusNotesImages>'}
	${object.enableMassEnableReportBuilder == null ? '' : '<enableMassEnableReportBuilder>' + object.enableMassEnableReportBuilder + '</enableMassEnableReportBuilder>'}
	${object.enableNewChartsEngine == null ? '' : '<enableNewChartsEngine>' + object.enableNewChartsEngine + '</enableNewChartsEngine>'}
	${object.enablePowerInsights == null ? '' : '<enablePowerInsights>' + object.enablePowerInsights + '</enablePowerInsights>'}
	${object.enableRemoveFooterForRepDisplay == null ? '' : '<enableRemoveFooterForRepDisplay>' + object.enableRemoveFooterForRepDisplay + '</enableRemoveFooterForRepDisplay>'}
	${object.enableRemoveFooterFromRepExp == null ? '' : '<enableRemoveFooterFromRepExp>' + object.enableRemoveFooterFromRepExp + '</enableRemoveFooterFromRepExp>'}
	${object.enableReportFieldToFieldPref == null ? '' : '<enableReportFieldToFieldPref>' + object.enableReportFieldToFieldPref + '</enableReportFieldToFieldPref>'}
	${object.enableReportUniqueRowCountPref == null ? '' : '<enableReportUniqueRowCountPref>' + object.enableReportUniqueRowCountPref + '</enableReportUniqueRowCountPref>'}
	${object.enableSFXJoinedReportsEnable == null ? '' : '<enableSFXJoinedReportsEnable>' + object.enableSFXJoinedReportsEnable + '</enableSFXJoinedReportsEnable>'}
	${object.enableSmartDataDiscovery == null ? '' : '<enableSmartDataDiscovery>' + object.enableSmartDataDiscovery + '</enableSmartDataDiscovery>'}
	${object.enableUseOldChartsLookAndFeel == null ? '' : '<enableUseOldChartsLookAndFeel>' + object.enableUseOldChartsLookAndFeel + '</enableUseOldChartsLookAndFeel>'}
	${object.enableWaveReplication == null ? '' : '<enableWaveReplication>' + object.enableWaveReplication + '</enableWaveReplication>'}
	${object.enableWaveSharingInheritance == null ? '' : '<enableWaveSharingInheritance>' + object.enableWaveSharingInheritance + '</enableWaveSharingInheritance>'}
	${object.enableWaveTemplate == null ? '' : '<enableWaveTemplate>' + object.enableWaveTemplate + '</enableWaveTemplate>'}
	${object.enableWaveTrendedDatasetCleanup == null ? '' : '<enableWaveTrendedDatasetCleanup>' + object.enableWaveTrendedDatasetCleanup + '</enableWaveTrendedDatasetCleanup>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}