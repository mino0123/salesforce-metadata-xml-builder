module.exports = (value) => {
  if (!value) { return ''; }
  if (["ADP","AED","AFA","AFN","ALL","AMD","ANG","AOA","ARS","ATS","AUD","AWG","AZM","AZN","BAM","BBD","BDT","BEF","BGL","BGN","BHD","BIF","BMD","BND","BOB","BOV","BRB","BRL","BSD","BTN","BWP","BYB","BYR","BZD","CAD","CDF","CHF","CLF","CLP","CNY","COP","CRC","CSD","CUC","CUP","CVE","CYP","CZK","DEM","DJF","DKK","DOP","DZD","ECS","EEK","EGP","ERN","ESP","ETB","EUR","FIM","FJD","FKP","FRF","GBP","GEL","GHC","GHS","GIP","GMD","GNF","GRD","GTQ","GWP","GYD","HKD","HNL","HRD","HRK","HTG","HUF","IDR","IEP","ILS","INR","IQD","IRR","ISK","ITL","JMD","JOD","JPY","KES","KGS","KHR","KMF","KPW","KRW","KWD","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LUF","LVL","LYD","MAD","MDL","MGA","MGF","MKD","MMK","MNT","MOP","MRO","MTL","MUR","MVR","MWK","MXN","MXV","MYR","MZM","MZN","NAD","NGN","NIO","NLG","NOK","NPR","NZD","OMR","PAB","PEN","PGK","PHP","PKR","PLN","PTE","PYG","QAR","RMB","ROL","RON","RSD","RUB","RUR","RWF","SAR","SBD","SCR","SDD","SDG","SEK","SGD","SHP","SIT","SKK","SLL","SOS","SRD","SRG","SSP","STD","SUR","SVC","SYP","SZL","THB","TJR","TJS","TMM","TMT","TND","TOP","TPE","TRL","TRY","TTD","TWD","TZS","UAH","UGX","USD","UYU","UZS","VEB","VEF","VND","VUV","WST","XAF","XCD","XOF","XPF","YER","YUM","ZAR","ZMK","ZMW","ZWD","ZWL"].indexOf(value) < 0) {
    throw new Error('Invalid CurrencyIsoCode value: ' + value);
  }
  return value;
};