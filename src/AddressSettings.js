const CountriesAndStates = require('./CountriesAndStates');

module.exports = (object, asChild) => {
  var rootTagStart = '<AddressSettings>';
  var rootTagEnd = '</AddressSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.countriesAndStates == null ? '' : '<countriesAndStates>' + CountriesAndStates(object.countriesAndStates, true) + '</countriesAndStates>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}