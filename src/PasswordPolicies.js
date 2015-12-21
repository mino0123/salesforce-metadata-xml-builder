const Complexity = require('./Complexity');
const Expiration = require('./Expiration');
const LockoutInterval = require('./LockoutInterval');
const MaxLoginAttempts = require('./MaxLoginAttempts');
const QuestionRestriction = require('./QuestionRestriction');

module.exports = (object, asChild) => {
  var rootTagStart = '<PasswordPolicies>';
  var rootTagEnd = '</PasswordPolicies>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.apiOnlyUserHomePageURL == null ? '' : '<apiOnlyUserHomePageURL>' + object.apiOnlyUserHomePageURL + '</apiOnlyUserHomePageURL>'}
	${object.complexity == null ? '' : '<complexity>' + Complexity(object.complexity, true) + '</complexity>'}
	${object.expiration == null ? '' : '<expiration>' + Expiration(object.expiration, true) + '</expiration>'}
	${object.historyRestriction == null ? '' : '<historyRestriction>' + object.historyRestriction + '</historyRestriction>'}
	${object.lockoutInterval == null ? '' : '<lockoutInterval>' + LockoutInterval(object.lockoutInterval, true) + '</lockoutInterval>'}
	${object.maxLoginAttempts == null ? '' : '<maxLoginAttempts>' + MaxLoginAttempts(object.maxLoginAttempts, true) + '</maxLoginAttempts>'}
	${object.minimumPasswordLength == null ? '' : '<minimumPasswordLength>' + object.minimumPasswordLength + '</minimumPasswordLength>'}
	${object.minimumPasswordLifetime == null ? '' : '<minimumPasswordLifetime>' + object.minimumPasswordLifetime + '</minimumPasswordLifetime>'}
	${object.obscureSecretAnswer == null ? '' : '<obscureSecretAnswer>' + object.obscureSecretAnswer + '</obscureSecretAnswer>'}
	${object.passwordAssistanceMessage == null ? '' : '<passwordAssistanceMessage>' + object.passwordAssistanceMessage + '</passwordAssistanceMessage>'}
	${object.passwordAssistanceURL == null ? '' : '<passwordAssistanceURL>' + object.passwordAssistanceURL + '</passwordAssistanceURL>'}
	${object.questionRestriction == null ? '' : '<questionRestriction>' + QuestionRestriction(object.questionRestriction, true) + '</questionRestriction>'}
${rootTagEnd}`;
}