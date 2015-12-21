
module.exports = (object, asChild) => {
  var rootTagStart = '<ActivitiesSettings>';
  var rootTagEnd = '</ActivitiesSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.allowUsersToRelateMultipleContactsToTasksAndEvents == null ? '' : '<allowUsersToRelateMultipleContactsToTasksAndEvents>' + object.allowUsersToRelateMultipleContactsToTasksAndEvents + '</allowUsersToRelateMultipleContactsToTasksAndEvents>'}
	${object.enableActivityReminders == null ? '' : '<enableActivityReminders>' + object.enableActivityReminders + '</enableActivityReminders>'}
	${object.enableClickCreateEvents == null ? '' : '<enableClickCreateEvents>' + object.enableClickCreateEvents + '</enableClickCreateEvents>'}
	${object.enableDragAndDropScheduling == null ? '' : '<enableDragAndDropScheduling>' + object.enableDragAndDropScheduling + '</enableDragAndDropScheduling>'}
	${object.enableEmailTracking == null ? '' : '<enableEmailTracking>' + object.enableEmailTracking + '</enableEmailTracking>'}
	${object.enableGroupTasks == null ? '' : '<enableGroupTasks>' + object.enableGroupTasks + '</enableGroupTasks>'}
	${object.enableListViewScheduling == null ? '' : '<enableListViewScheduling>' + object.enableListViewScheduling + '</enableListViewScheduling>'}
	${object.enableLogNote == null ? '' : '<enableLogNote>' + object.enableLogNote + '</enableLogNote>'}
	${object.enableMultidayEvents == null ? '' : '<enableMultidayEvents>' + object.enableMultidayEvents + '</enableMultidayEvents>'}
	${object.enableRecurringEvents == null ? '' : '<enableRecurringEvents>' + object.enableRecurringEvents + '</enableRecurringEvents>'}
	${object.enableRecurringTasks == null ? '' : '<enableRecurringTasks>' + object.enableRecurringTasks + '</enableRecurringTasks>'}
	${object.enableSidebarCalendarShortcut == null ? '' : '<enableSidebarCalendarShortcut>' + object.enableSidebarCalendarShortcut + '</enableSidebarCalendarShortcut>'}
	${object.enableSimpleTaskCreateUI == null ? '' : '<enableSimpleTaskCreateUI>' + object.enableSimpleTaskCreateUI + '</enableSimpleTaskCreateUI>'}
	${object.enableUNSTaskDelegatedToNotifications == null ? '' : '<enableUNSTaskDelegatedToNotifications>' + object.enableUNSTaskDelegatedToNotifications + '</enableUNSTaskDelegatedToNotifications>'}
	${object.meetingRequestsLogo == null ? '' : '<meetingRequestsLogo>' + object.meetingRequestsLogo + '</meetingRequestsLogo>'}
	${object.showCustomLogoMeetingRequests == null ? '' : '<showCustomLogoMeetingRequests>' + object.showCustomLogoMeetingRequests + '</showCustomLogoMeetingRequests>'}
	${object.showEventDetailsMultiUserCalendar == null ? '' : '<showEventDetailsMultiUserCalendar>' + object.showEventDetailsMultiUserCalendar + '</showEventDetailsMultiUserCalendar>'}
	${object.showHomePageHoverLinksForEvents == null ? '' : '<showHomePageHoverLinksForEvents>' + object.showHomePageHoverLinksForEvents + '</showHomePageHoverLinksForEvents>'}
	${object.showMyTasksHoverLinks == null ? '' : '<showMyTasksHoverLinks>' + object.showMyTasksHoverLinks + '</showMyTasksHoverLinks>'}
	${object.showRequestedMeetingsOnHomePage == null ? '' : '<showRequestedMeetingsOnHomePage>' + object.showRequestedMeetingsOnHomePage + '</showRequestedMeetingsOnHomePage>'}
${rootTagEnd}`;
}