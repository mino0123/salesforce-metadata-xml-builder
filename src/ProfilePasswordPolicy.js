
module.exports = (object, asChild) => {
  var rootTagStart = '<ProfilePasswordPolicy>';
  var rootTagEnd = '</ProfilePasswordPolicy>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.lockoutInterval == null ? '' : '<lockoutInterval>' + object.lockoutInterval + '</lockoutInterval>'}
	${object.maxLoginAttempts == null ? '' : '<maxLoginAttempts>' + object.maxLoginAttempts + '</maxLoginAttempts>'}
	${object.minimumPasswordLength == null ? '' : '<minimumPasswordLength>' + object.minimumPasswordLength + '</minimumPasswordLength>'}
	${object.minimumPasswordLifetime == null ? '' : '<minimumPasswordLifetime>' + object.minimumPasswordLifetime + '</minimumPasswordLifetime>'}
	${object.obscure == null ? '' : '<obscure>' + object.obscure + '</obscure>'}
	${object.passwordComplexity == null ? '' : '<passwordComplexity>' + object.passwordComplexity + '</passwordComplexity>'}
	${object.passwordExpiration == null ? '' : '<passwordExpiration>' + object.passwordExpiration + '</passwordExpiration>'}
	${object.passwordHistory == null ? '' : '<passwordHistory>' + object.passwordHistory + '</passwordHistory>'}
	${object.passwordQuestion == null ? '' : '<passwordQuestion>' + object.passwordQuestion + '</passwordQuestion>'}
	${object.profile == null ? '' : '<profile>' + object.profile + '</profile>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}