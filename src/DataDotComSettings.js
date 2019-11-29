
module.exports = (object, asChild) => {
  var rootTagStart = '<DataDotComSettings>';
  var rootTagEnd = '</DataDotComSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableAccountExportButtonOff == null ? '' : '<enableAccountExportButtonOff>' + object.enableAccountExportButtonOff + '</enableAccountExportButtonOff>'}
	${object.enableAccountImportButtonOff == null ? '' : '<enableAccountImportButtonOff>' + object.enableAccountImportButtonOff + '</enableAccountImportButtonOff>'}
	${object.enableAllowDupeContactFromLead == null ? '' : '<enableAllowDupeContactFromLead>' + object.enableAllowDupeContactFromLead + '</enableAllowDupeContactFromLead>'}
	${object.enableAllowDupeLeadFromContact == null ? '' : '<enableAllowDupeLeadFromContact>' + object.enableAllowDupeLeadFromContact + '</enableAllowDupeLeadFromContact>'}
	${object.enableCleanUpgradeRequested == null ? '' : '<enableCleanUpgradeRequested>' + object.enableCleanUpgradeRequested + '</enableCleanUpgradeRequested>'}
	${object.enableContactExportButtonOff == null ? '' : '<enableContactExportButtonOff>' + object.enableContactExportButtonOff + '</enableContactExportButtonOff>'}
	${object.enableContactImportButtonOff == null ? '' : '<enableContactImportButtonOff>' + object.enableContactImportButtonOff + '</enableContactImportButtonOff>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}