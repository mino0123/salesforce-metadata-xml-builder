module.exports = (value) => {
  if (!value) { return ''; }
  if (["Nominative","Accusative","Genitive","Dative","Inessive","Elative","Illative","Adessive","Ablative","Allative","Essive","Translative","Partitive","Objective","Subjective","Instrumental","Prepositional","Locative","Vocative","Sublative","Superessive","Delative","Causalfinal","Essiveformal","Termanative","Distributive","Ergative","Adverbial","Abessive","Comitative"].indexOf(value) < 0) {
    throw new Error('Invalid CaseType value: ' + value);
  }
  return value;
};