
module.exports = (object, asChild) => {
  var rootTagStart = '<RetailExecutionSettings>';
  var rootTagEnd = '</RetailExecutionSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableRetailExecution == null ? '' : '<enableRetailExecution>' + object.enableRetailExecution + '</enableRetailExecution>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}