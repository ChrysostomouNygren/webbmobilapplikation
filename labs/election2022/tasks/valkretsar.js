const data = require("../data.json");
const valkretsar = data.valkretsar;

function listDistricts() {
  const districts = [];
  valkretsar.map((district) => {
    districts.push(district.namn);
  });
  return console.log(districts.join(", "));
}

function districtResults(districtName) {
  valkretsar.forEach((distrikt) => {
    if (districtName.toLowerCase() === distrikt.namn.toLowerCase()) {
      const partirost = distrikt.rosterPaverkaMandat.partiroster;
      console.log(districtName);
      partirost.forEach((party) => {
        console.log(
          `${party.partiforkortning}: ${party.antalRoster} (${party.andelRoster})`
        );
      });
    }
  });
  return;
}

function partyResults(party) {
  console.log(`Resultat för ${party} per valkrets:`);
  valkretsar.forEach((res) => {
    const rost = res.rosterPaverkaMandat.partiroster;
    rost.forEach((nuru) => {
      if (party === nuru.partiforkortning) {
        console.log(`${res.namn}: ${nuru.andelRoster} (${nuru.andelRoster})`);
      }
    });
    // console.log(rost)
  });
  return;
}

listDistricts();
districtResults("MALMÖ kommun");
partyResults("V");
