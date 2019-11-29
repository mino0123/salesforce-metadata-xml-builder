
module.exports = (object, asChild) => {
  var rootTagStart = '<UserInterfaceSettings>';
  var rootTagEnd = '</UserInterfaceSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.alternateAlohaListView == null ? '' : '<alternateAlohaListView>' + object.alternateAlohaListView + '</alternateAlohaListView>'}
	${object.enableAsyncRelatedLists == null ? '' : '<enableAsyncRelatedLists>' + object.enableAsyncRelatedLists + '</enableAsyncRelatedLists>'}
	${object.enableClickjackUserPageHeaderless == null ? '' : '<enableClickjackUserPageHeaderless>' + object.enableClickjackUserPageHeaderless + '</enableClickjackUserPageHeaderless>'}
	${object.enableCollapsibleSections == null ? '' : '<enableCollapsibleSections>' + object.enableCollapsibleSections + '</enableCollapsibleSections>'}
	${object.enableCollapsibleSideBar == null ? '' : '<enableCollapsibleSideBar>' + object.enableCollapsibleSideBar + '</enableCollapsibleSideBar>'}
	${object.enableCustomObjectTruncate == null ? '' : '<enableCustomObjectTruncate>' + object.enableCustomObjectTruncate + '</enableCustomObjectTruncate>'}
	${object.enableCustomeSideBarOnAllPages == null ? '' : '<enableCustomeSideBarOnAllPages>' + object.enableCustomeSideBarOnAllPages + '</enableCustomeSideBarOnAllPages>'}
	${object.enableDeleteFieldHistory == null ? '' : '<enableDeleteFieldHistory>' + object.enableDeleteFieldHistory + '</enableDeleteFieldHistory>'}
	${object.enableHoverDetails == null ? '' : '<enableHoverDetails>' + object.enableHoverDetails + '</enableHoverDetails>'}
	${object.enableInlineEdit == null ? '' : '<enableInlineEdit>' + object.enableInlineEdit + '</enableInlineEdit>'}
	${object.enableNewPageLayoutEditor == null ? '' : '<enableNewPageLayoutEditor>' + object.enableNewPageLayoutEditor + '</enableNewPageLayoutEditor>'}
	${object.enablePersonalCanvas == null ? '' : '<enablePersonalCanvas>' + object.enablePersonalCanvas + '</enablePersonalCanvas>'}
	${object.enablePrintableListViews == null ? '' : '<enablePrintableListViews>' + object.enablePrintableListViews + '</enablePrintableListViews>'}
	${object.enableProfileCustomTabsets == null ? '' : '<enableProfileCustomTabsets>' + object.enableProfileCustomTabsets + '</enableProfileCustomTabsets>'}
	${object.enableQuickCreate == null ? '' : '<enableQuickCreate>' + object.enableQuickCreate + '</enableQuickCreate>'}
	${object.enableTabOrganizer == null ? '' : '<enableTabOrganizer>' + object.enableTabOrganizer + '</enableTabOrganizer>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}