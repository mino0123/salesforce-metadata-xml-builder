
module.exports = (object, asChild) => {
  var rootTagStart = '<ContractSettings>';
  var rootTagEnd = '</ContractSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.autoCalculateEndDate == null ? '' : '<autoCalculateEndDate>' + object.autoCalculateEndDate + '</autoCalculateEndDate>'}
	${object.autoExpirationDelay == null ? '' : '<autoExpirationDelay>' + object.autoExpirationDelay + '</autoExpirationDelay>'}
	${object.autoExpirationRecipient == null ? '' : '<autoExpirationRecipient>' + object.autoExpirationRecipient + '</autoExpirationRecipient>'}
	${object.autoExpireContracts == null ? '' : '<autoExpireContracts>' + object.autoExpireContracts + '</autoExpireContracts>'}
	${object.enableContractHistoryTracking == null ? '' : '<enableContractHistoryTracking>' + object.enableContractHistoryTracking + '</enableContractHistoryTracking>'}
	${object.notifyOwnersOnContractExpiration == null ? '' : '<notifyOwnersOnContractExpiration>' + object.notifyOwnersOnContractExpiration + '</notifyOwnersOnContractExpiration>'}
${rootTagEnd}`;
}