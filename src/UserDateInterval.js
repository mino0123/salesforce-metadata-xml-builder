module.exports = (value) => {
  if (!value) { return ''; }
  if (["INTERVAL_CURRENT","INTERVAL_CURNEXT1","INTERVAL_CURPREV1","INTERVAL_NEXT1","INTERVAL_PREV1","INTERVAL_CURNEXT3","INTERVAL_CURFY","INTERVAL_PREVFY","INTERVAL_PREV2FY","INTERVAL_AGO2FY","INTERVAL_NEXTFY","INTERVAL_PREVCURFY","INTERVAL_PREVCUR2FY","INTERVAL_CURNEXTFY","INTERVAL_CUSTOM","INTERVAL_YESTERDAY","INTERVAL_TODAY","INTERVAL_TOMORROW","INTERVAL_LASTWEEK","INTERVAL_THISWEEK","INTERVAL_NEXTWEEK","INTERVAL_LASTMONTH","INTERVAL_THISMONTH","INTERVAL_NEXTMONTH","INTERVAL_LASTTHISMONTH","INTERVAL_THISNEXTMONTH","INTERVAL_CURRENTQ","INTERVAL_CURNEXTQ","INTERVAL_CURPREVQ","INTERVAL_NEXTQ","INTERVAL_PREVQ","INTERVAL_CURNEXT3Q","INTERVAL_CURY","INTERVAL_PREVY","INTERVAL_PREV2Y","INTERVAL_AGO2Y","INTERVAL_NEXTY","INTERVAL_PREVCURY","INTERVAL_PREVCUR2Y","INTERVAL_CURNEXTY","INTERVAL_LAST7","INTERVAL_LAST30","INTERVAL_LAST60","INTERVAL_LAST90","INTERVAL_LAST120","INTERVAL_NEXT7","INTERVAL_NEXT30","INTERVAL_NEXT60","INTERVAL_NEXT90","INTERVAL_NEXT120","LAST_FISCALWEEK","THIS_FISCALWEEK","NEXT_FISCALWEEK","LAST_FISCALPERIOD","THIS_FISCALPERIOD","NEXT_FISCALPERIOD","LASTTHIS_FISCALPERIOD","THISNEXT_FISCALPERIOD","CURRENT_ENTITLEMENT_PERIOD","PREVIOUS_ENTITLEMENT_PERIOD","PREVIOUS_TWO_ENTITLEMENT_PERIODS","TWO_ENTITLEMENT_PERIODS_AGO","CURRENT_AND_PREVIOUS_ENTITLEMENT_PERIOD","CURRENT_AND_PREVIOUS_TWO_ENTITLEMENT_PERIODS"].indexOf(value) < 0) {
    throw new Error('Invalid UserDateInterval value: ' + value);
  }
  return value;
};