// All rewritten user-facing copy lives here. Edit freely; no code changes needed.
// Strings still written inline in app.js: form labels, modal titles, admin screens.
export const S={
heroEyebrow:'Right now',
noRisk:"Nothing's on fire.",
attentionEmpty:'Nothing stuck. Suspicious.',
workEmptyTitle:'Nothing due today.',
workEmptyBody:'Nothing assigned to you right now.',
doneToday:n=>`${n} down today.`,
dayClear:'All clear',
capNote:'Estimates only. Untimed tasks count as 2h.',
capLabel:p=>p>=100?'Over':p>=80?'Stacked':p>=45?'Steady':'Free',
eventLabel:{'Campaign start':'Kicks off','Campaign end':'Wraps','Project internal':'Internal handoff','Client deadline':'Client due',Task:'Task'},
eyProjects:'All projects',eyBrands:'Clients',eyCalendar:'Deadlines',eyMessages:'Pings',eyApprovals:'Sign-offs',
brandsSub:'What they like, who to call, what is live.',
calendarSub:'Everything due, by day.',
messagesSub:'Quick pings. Feedback on work goes in task comments.',
chatNotice:'<b>Quick pings.</b> Feedback on work goes in task comments.',
depLabel:'Waiting on',depNote:'This slips if that does.',
sendBack:'Send back',sendBackTitle:'Send back',sendBackGo:'Send it back',
approved:'Approved.',sentBack:n=>`Sent back to ${n}.`,submitted:(v,who)=>`V${v} is with ${who}.`,saved:'Saved.',done:'Done.',
submitHint:n=>`What changed? Where should ${n||'the reviewer'} look first?`,
noComments:'Quiet in here.',noVersions:'Nothing sent for review yet.',noReviews:'Nothing waiting on you.',noRequests:'No profile requests.',
noChats:'No pings yet. Message someone from a project.',pickChat:'Pick a conversation.',
clientTeam:'Client team',ourTeam:'Our team',
invite:n=>`Link is ready. Send it to ${n}; it only works once. Nothing has been emailed.`,
errNotFound:"Couldn't find that. Reload and try again.",errMissing:"Couldn't find that.",errManagers:'Managers only.',errAdmins:'Admins only.',
dateOrder:'End date comes before the start date.',handoffOrder:'Internal handoff has to land before client delivery.'
};
