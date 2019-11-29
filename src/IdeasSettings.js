
module.exports = (object, asChild) => {
  var rootTagStart = '<IdeasSettings>';
  var rootTagEnd = '</IdeasSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableChatterProfile == null ? '' : '<enableChatterProfile>' + object.enableChatterProfile + '</enableChatterProfile>'}
	${object.enableHtmlIdea == null ? '' : '<enableHtmlIdea>' + object.enableHtmlIdea + '</enableHtmlIdea>'}
	${object.enableIdeaMultipleCategory == null ? '' : '<enableIdeaMultipleCategory>' + object.enableIdeaMultipleCategory + '</enableIdeaMultipleCategory>'}
	${object.enableIdeaThemes == null ? '' : '<enableIdeaThemes>' + object.enableIdeaThemes + '</enableIdeaThemes>'}
	${object.enableIdeas == null ? '' : '<enableIdeas>' + object.enableIdeas + '</enableIdeas>'}
	${object.enableIdeasControllerExtensions == null ? '' : '<enableIdeasControllerExtensions>' + object.enableIdeasControllerExtensions + '</enableIdeasControllerExtensions>'}
	${object.enableIdeasReputation == null ? '' : '<enableIdeasReputation>' + object.enableIdeasReputation + '</enableIdeasReputation>'}
	${object.halfLife == null ? '' : '<halfLife>' + object.halfLife + '</halfLife>'}
	${object.ideasProfilePage == null ? '' : '<ideasProfilePage>' + object.ideasProfilePage + '</ideasProfilePage>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}