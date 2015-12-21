
module.exports = (object, asChild) => {
  var rootTagStart = '<ProfileObjectPermissions>';
  var rootTagEnd = '</ProfileObjectPermissions>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.allowCreate == null ? '' : '<allowCreate>' + object.allowCreate + '</allowCreate>'}
	${object.allowDelete == null ? '' : '<allowDelete>' + object.allowDelete + '</allowDelete>'}
	${object.allowEdit == null ? '' : '<allowEdit>' + object.allowEdit + '</allowEdit>'}
	${object.allowRead == null ? '' : '<allowRead>' + object.allowRead + '</allowRead>'}
	${object.modifyAllRecords == null ? '' : '<modifyAllRecords>' + object.modifyAllRecords + '</modifyAllRecords>'}
	${object.object == null ? '' : '<object>' + object.object + '</object>'}
	${object.viewAllRecords == null ? '' : '<viewAllRecords>' + object.viewAllRecords + '</viewAllRecords>'}
${rootTagEnd}`;
}