module.exports = (value) => {
  if (!value) { return ''; }
  if (["Communications","Education","FinancialServices","Government","HealthcareLifeSciences","Manufacturing","Media","Nonprofits","ProfessionalServices","RealEstate","Retail","TravelTransportationHospitality","HighTech","GeneralBusiness"].indexOf(value) < 0) {
    throw new Error('Invalid LightningBoltCategory value: ' + value);
  }
  return value;
};