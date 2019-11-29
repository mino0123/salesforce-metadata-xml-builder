const BotStep = require('./BotStep');

module.exports = (object, asChild) => {
  var rootTagStart = '<BotDialog>';
  var rootTagEnd = '</BotDialog>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.botDialogGroup == null ? '' : '<botDialogGroup>' + object.botDialogGroup + '</botDialogGroup>'}
	${object.botSteps == null ? '' : object.botSteps.map(p => '<botSteps>' + BotStep(p, true) + '</botSteps>').join('')}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.developerName == null ? '' : '<developerName>' + object.developerName + '</developerName>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.mlIntent == null ? '' : '<mlIntent>' + object.mlIntent + '</mlIntent>'}
	${object.mlIntentTrainingEnabled == null ? '' : '<mlIntentTrainingEnabled>' + object.mlIntentTrainingEnabled + '</mlIntentTrainingEnabled>'}
	${object.showInFooterMenu == null ? '' : '<showInFooterMenu>' + object.showInFooterMenu + '</showInFooterMenu>'}
${rootTagEnd}`;
}