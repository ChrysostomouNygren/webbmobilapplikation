const data = require("../data.json");
const partiMandat = data.partiMandat;

function mandates(party) {
  partiMandat.forEach((parti) => {
    for (let key in parti) {
      if (party === parti.partiforkortning) {
        console.log(`${parti.partibeteckning}: ${parti.antalMandat}`);
      }
      return;
    }
  });
  return;
}

function allMandates() {
  const partysMandates = [];
  partiMandat.map((parti) => {
    partysMandates.push(`${parti.partiforkortning}: ${parti.antalMandat}`);
  });
  console.log(partysMandates);
}

function calculateMandates(parties) {
  const calcFuck = [];
  const partFuck = [];
  parties.forEach((parti) => {
    partiMandat.forEach((partiluring) => {
      if (parti === partiluring.partiforkortning) {
        partFuck.push(parti)
        calcFuck.push(partiluring.antalMandat);
      }
    });
  });
  let sum = 0;
  for (let i = 0; i < calcFuck.length; i++) {
    sum += calcFuck[i];
  }
  return console.log(`${partFuck.join(', ')}: ${sum} av 349 totalt`);
}

mandates("V");
allMandates();
calculateMandates(["S", "V", "MP"]);
