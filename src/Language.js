module.exports = (value) => {
  if (!value) { return ''; }
  if (["en_US","de","es","fr","it","ja","sv","ko","zh_TW","zh_CN","pt_BR","nl_NL","da","th","fi","ru","es_MX","no","hu","pl","cs","tr","in","ro","vi","uk","iw","el","bg","en_GB","ar","sk","pt_PT","hr","sl","fr_CA","ka","sr","sh","en_AU","en_MY","en_IN","en_PH","en_CA","ro_MD","bs","mk","lv","lt","et","sq","sh_ME","mt","ga","eu","cy","is","ms","tl","lb","rm","hy","hi","ur","bn","de_AT","de_CH","ta","ar_DZ","ar_BH","ar_EG","ar_IQ","ar_JO","ar_KW","ar_LB","ar_LY","ar_MA","ar_OM","ar_QA","ar_SA","ar_SD","ar_SY","ar_TN","ar_AE","ar_YE","zh_SG","zh_HK","en_HK","en_IE","en_SG","en_ZA","fr_BE","fr_LU","fr_CH","de_BE","de_LU","it_CH","nl_BE","es_AR","es_BO","es_CL","es_CO","es_CR","es_DO","es_EC","es_SV","es_GT","es_HN","es_NI","es_PA","es_PY","es_PE","es_PR","es_US","es_UY","es_VE","ca","af","sw","zu","xh","te","ml","kn","mr","gu","en_NZ","mi","my","eo","iw_EO"].indexOf(value) < 0) {
    throw new Error('Invalid Language value: ' + value);
  }
  return value;
};