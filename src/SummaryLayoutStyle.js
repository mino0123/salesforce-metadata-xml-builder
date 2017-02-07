module.exports = (value) => {
  if (!value) { return ''; }
  if (["Default","QuoteTemplate","DefaultQuoteTemplate","ServiceReportTemplate","ChildServiceReportTemplateStyle","DefaultServiceReportTemplate","CaseInteraction","QuickActionLayoutLeftRight","QuickActionLayoutTopDown","PathAssistant"].indexOf(value) < 0) {
    throw new Error('Invalid SummaryLayoutStyle value: ' + value);
  }
  return value;
};