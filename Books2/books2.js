const dbrMetai = new Date().getFullYear();

const katalogas = [
  {
    pavadinimas: "Informacinės technologijos",
    knygos: [
      {ISBN: "IT-12345",leidimoMetai: 2019, pavadinimas: "Programavimas linksmai",puslapiuSkaicius: 250,kiekis: 12,kaina: 25},
      {ISBN: "IT-12346",leidimoMetai: 2018,pavadinimas: "WEB technologijos",puslapiuSkaicius: 350,kiekis: 50,kaina: 30},
      {ISBN: "IT-12347",leidimoMetai: 2020,pavadinimas: "Duomenų bazės pradedantiesiems",puslapiuSkaicius: 280,kiekis: 20,kaina: 28},
      {ISBN: "IT-12348",leidimoMetai: 2023,pavadinimas: "JavaScript pagrindai",puslapiuSkaicius: 320,kiekis: 15,kaina: 32},
      {ISBN: "IT-12349",leidimoMetai: dbrMetai, pavadinimas: "Dirbtinis intelektas šiandien",puslapiuSkaicius: 410,kiekis: 10,kaina: 40}
    ]
  },
  {
    pavadinimas: "Fantastika",
    knygos: [
      {ISBN: "F-10001",leidimoMetai: 2015,pavadinimas: "Žvaigždžių kelias",puslapiuSkaicius: 420,kiekis: 5,kaina: 18},
      {ISBN: "F-10002",leidimoMetai: 2017,pavadinimas: "Galaktikos paslaptys",puslapiuSkaicius: 380,kiekis: 8,kaina: 20},
      {ISBN: "F-10003",leidimoMetai: 2021,pavadinimas: "Klastingas mėnulis",puslapiuSkaicius: 290,kiekis: 6,kaina: 19},
      {ISBN: "F-10004",leidimoMetai: 2022,pavadinimas: "Paskutinė planeta",puslapiuSkaicius: 350,kiekis: 9,kaina: 22},
      {ISBN: "F-10005",leidimoMetai: dbrMetai,pavadinimas: "Laiko vartai",puslapiuSkaicius: 310,kiekis: 7,kaina: 24}
    ]
  },
  {
    pavadinimas: "Romanai",
    knygos: [
      {ISBN: "R-20001",leidimoMetai: 2010,pavadinimas: "Meilė ir likimas",puslapiuSkaicius: 280,kiekis: 4,kaina: 15},
      {ISBN: "R-20002",leidimoMetai: 2012,pavadinimas: "Sugrįžimas namo",puslapiuSkaicius: 320,kiekis: 6,kaina: 17},
      {ISBN: "R-20003",leidimoMetai: 2019,pavadinimas: "Paslėptos istorijos",puslapiuSkaicius: 260,kiekis: 3,kaina: 16},
      {ISBN: "R-20004",leidimoMetai: 2023,pavadinimas: "Miesto šviesos",puslapiuSkaicius: 340,kiekis: 5,kaina: 21},
      {ISBN: "R-20005",leidimoMetai: dbrMetai,pavadinimas: "Naujas rytojus",puslapiuSkaicius: 300,kiekis: 7,kaina: 23}
    ]
  }
];
// katalogas.forEach((kat) => {
//   console.log(`Kategorija: ${kat.pavadinimas}`);

//   kat.knygos.forEach((knyga) => {
//     const sms = knyga.leidimoMetai === dbrMetai ? "(knyga nauja)" : "";
//     console.log(`ISBN: ${knyga.ISBN}`);
//     console.log(`Leidimo metais: ${knyga.leidimoMetai}${sms}`);
//     console.log(`Pavadinimas: "${knyga.pavadinimas}"`);
//     console.log(`Puslapių skaičius: ${knyga.puslapiuSkaicius}`);
//     console.log(`Kiekis: ${knyga.kiekis}`);
//     console.log(`Kaina: ${knyga.kaina} EUR`);
//     console.log("-----------------------------------------------------------");
//   });
// });
// ________________________________________________________________________________________  11 28 - MAP FILTER REDUCE SORT MIN + MAX  ________
// MAP  ------------------------------------------------------------------------------------------------------------------------------------
// 1) Naudodami map, sukurkite naują masyvą su visų knygų pavadinimais (be pasikartojimų kategorijose).
const unikalusPavadinimai = [
  ...new Set( katalogas.flatMap (kat => kat.knygos.map (knyga => knyga.pavadinimas) ))
];
console.log(unikalusPavadinimai);

// TAS PATS - Simple Version
// katalogas.flatMap(function(kategorija) {
//   return kategorija.knygos.map(function(knyga) {
//     return knyga.pavadinimas;
//   });
// });
//

// 2) Naudodami map, sukurkite masyvą objektų, kuriuose būtų:
// // { kategorija: "...",  pavadinimas: "...", pilnasPavadinimas: "Kategorija - Knygos pavadinimas" }
// Grąžinam OBJEKTĄ (todėl {} skliaustai) . Be jų JS galvotų, kad {} yra funkcijos kūnas, o ne objektas.
const knygosSuKategorija = katalogas.flatMap(kateg =>
  kateg.knygos.map(knyga => ({
    kategorija: kateg.pavadinimas,
    pavadinimas: knyga.pavadinimas,
    pilnasPavadinimas: `${kateg.pavadinimas} - ${knyga.pavadinimas}`
  }))
);
console.log(knygosSuKategorija);

// 3) Naudodami map, kiekvienai knygai apskaičiuokite bendrą vertę sandėlyje (kiekis * kaina) ir grąžinkite masyvą su tokiais objektais:
// { ISBN: "...", pavadinimas: "...", verte: 12 }
const knyguVerteSandely = katalogas.flatMap(kateg =>
  kateg.knygos.map(knyga => ({
    ISBN: knyga.ISBN,
    pavadinimas: knyga.pavadinimas,
    verte: knyga.kiekis * knyga.kaina
  }))
);
console.log(knyguVerteSandely);

// Destructuring Version
// const knyguVerteSandely = katalogas.flatMap(kateg =>
// kateg.knygos.map(({ ISBN, pavadinimas, kiekis, kaina }) => ({ ISBN, pavadinimas, verte: kiekis * kaina})) );
// console.log(knyguVerteSandely);

// FILTER   ------------------------------------------------------------------------------------------------------------------------------
// 4) Naudodami filter, išrinkite naujas knygas – tas, kurių leidimoMetai yra lygūs einamiesiems metams.
// Viršuje gyvena   const dbrMetai = new Date().getFullYear();
// knyga => knyga.leidimoMetai === dbrMetai    -   Paduok man knygą, aš patikrinsiu ar jos metai lygūs dbrMetai
const naujosKnygos = katalogas
  .flatMap(kateg => kateg.knygos)
  .filter(knyga => knyga.leidimoMetai === dbrMetai);
console.log(naujosKnygos);

// 5) Naudodami filter, išrinkite brangias knygas, kurių kaina didesnė už, pavyzdžiui, 30 EUR.
const brangiosKnygos = katalogas
  .flatMap(kateg => kateg.knygos)
  .filter(knyga => knyga.kaina > 30);
console.log(brangiosKnygos);

// 6) Naudodami filter, sukurkite naują kategorijų masyvą, kuriame liktų tik tos kategorijos, kurių bent viena knyga turi daugiau nei 300 puslapių.
const kategoriUp300 = katalogas.filter(kateg =>
  kateg.knygos.some(knyga => knyga.puslapiuSkaicius > 300)
);
console.log(kategoriUp300);

// REDUCE  --------------------------------------------------------------------------------------------------------------------------------
// 7) Naudodami reduce, suskaičiuokite bendrą visų knygų kiekį kataloge (visose kategorijose).
// .reduce((suma, knyga) => ..., 0)  -  suma akumuliatorius (kaupia rezultatą)  knyga → dabartinė knyga  0 → pradinė suma
const bendrasKnyguKiekis = katalogas
  .flatMap(kateg => kateg.knygos)
  .reduce((suma, knyga) => suma + knyga.kiekis, 0);
console.log(bendrasKnyguKiekis);

// 8) Naudodami reduce, suskaičiuokite bendrą katalogo vertę eurais, t. y. visų knygų (kiekis * kaina) sumą.
const bendraKatalogoVerte = katalogas
  .flatMap(kateg => kateg.knygos)
  .reduce((suma, knyga) => suma + knyga.kiekis * knyga.kaina, 0);
console.log(bendraKatalogoVerte);

// 9) Naudodami reduce, suskaičiuokite, kiek iš viso puslapių turėtų visos knygos, jei jas visas sudėtume (suma puslapiuSkaicius * kiekis).
const bendrasPuslapiuSkaicius = katalogas
  .flatMap(kateg => kateg.knygos)
  .reduce((suma, knyga) => suma + knyga.puslapiuSkaicius * knyga.kiekis, 0);
console.log(bendrasPuslapiuSkaicius);

// SORT  ----------------------------------------------------------------------------------------------------------------------------------
// Skaičiams - (a, b) => a - b    Tekstui - localeCompare
// 10) Naudodami sort, išrikiuokite vienos pasirinktos kategorijos knygas pagal leidimo metus didėjančia tvarka.
const itKateg = katalogas.find(kateg => kateg.pavadinimas === "Informacinės technologijos");
const knygosAscMetai = [...itKateg.knygos].sort((a, b) => a.leidimoMetai - b.leidimoMetai);
console.log(knygosAscMetai);

// 11) Naudodami sort, išrikiuokite visas katalogo knygas pagal kainą mažėjančia tvarka.
const knygosDescKaina = katalogas
  .flatMap(kateg => kateg.knygos)
  .sort((a, b) => b.kaina - a.kaina);
console.log(knygosDescKaina);

// 12) Naudodami sort, išrikiuokite kategorijų masyvą pagal kategorijos pavadinimą abėcėlės tvarka.
const kategorijosAbc = [...katalogas]
.sort((a, b) => a.pavadinimas.localeCompare(b.pavadinimas));
console.log(kategorijosAbc);

// MIN + MAX  ------------------------------------------------------------------------------------------------------------------------------
// 13) Raskite pigiausią knygą kataloge (mažiausia kaina) ir išveskite jos kategoriją, pavadinimą ir kainą.
// Su flatMap(...).reduce(...)  NETINKA - pamesim kategorijos pavadinimą
const pigiausiaKnyga = katalogas.reduce((dbrPigiausia, kateg) => {
  kateg.knygos.forEach(knyga => {
    if ( !dbrPigiausia || knyga.kaina < dbrPigiausia.kaina) {
      dbrPigiausia = { kategorija: kateg.pavadinimas, pavadinimas: knyga.pavadinimas, kaina: knyga.kaina };
    }
  });
  return dbrPigiausia;
}, null);
console.log(pigiausiaKnyga);

// 14) Raskite brangiausią knygą kataloge (didžiausia kaina).
const brangiausiaKnyga = katalogas.reduce((dbrBrangiausia, kateg) => {
  kateg.knygos.forEach(knyga => {
    if (!dbrBrangiausia || knyga.kaina > dbrBrangiausia.kaina) {
      dbrBrangiausia = { kategorija: kateg.pavadinimas, pavadinimas: knyga.pavadinimas, kaina: knyga.kaina };
    }
  });
  return dbrBrangiausia;
}, null);
console.log(brangiausiaKnyga);

// 15) Raskite seniausią ir naujausią knygą pagal leidimoMetai.
// Einam per visas kategorijas > per visas jų knygas > laikom vieną objektą su keliais rezultat > update, kai randam geresnį variantą
const minMaxKnygosPagalMetus = katalogas.reduce(
  (rezultatas, kateg) => {
    kateg.knygos.forEach(knyga => {
      // SENIAUSIA <
      if ( !rezultatas.seniausia || knyga.leidimoMetai < rezultatas.seniausia.leidimoMetai) {
        rezultatas.seniausia = {
          kategorija: kateg.pavadinimas,
          pavadinimas: knyga.pavadinimas,
          leidimoMetai: knyga.leidimoMetai
        };
      }
      // NAUJAUSIA >
      if ( !rezultatas.naujausia || knyga.leidimoMetai > rezultatas.naujausia.leidimoMetai) {
        rezultatas.naujausia = {
          kategorija: kateg.pavadinimas,
          pavadinimas: knyga.pavadinimas,
          leidimoMetai: knyga.leidimoMetai
        };
      }
    });
    return rezultatas;
  },
  { seniausia: null, naujausia: null }
);
console.log(minMaxKnygosPagalMetus);

// 16) Raskite, kurios kategorijos knygų bendras kiekis (viso egzempliorių) yra didžiausias 
// ir mažiausias (galima imti reduce su Math.max / Math.min / sort).
// kateg.knygos.reduce((suma, knyga) => suma + knyga.kiekis, 0)   -   skaičiuoja iš viso egzempliorių toje kategorijoje
const minMaxKategorijuKiekis = katalogas.reduce(
  (rez, kateg) => {
    const bendrasKiekis = kateg.knygos.reduce(
      (suma, knyga) => suma + knyga.kiekis, 0 );
    // Max
    if (!rez.didziausia || bendrasKiekis > rez.didziausia.kiekis) {
      rez.didziausia = { kategorija: kateg.pavadinimas, kiekis: bendrasKiekis};
    }
    // Min
    if (!rez.maziausia || bendrasKiekis < rez.maziausia.kiekis) {
      rez.maziausia = { kategorija: kateg.pavadinimas, kiekis: bendrasKiekis};
    }
    return rez;
  },
  { didziausia: null, maziausia: null }
);
console.log(minMaxKategorijuKiekis);
// tas pats su SORT
// const kategorijuKiekiai = katalogas.map(kateg => ({
//   kategorija: kateg.pavadinimas,
//   kiekis: kateg.knygos.reduce((suma, knyga) => suma + knyga.kiekis, 0)
// }));
// kategorijuKiekiai.sort((a, b) => a.kiekis - b.kiekis);

// const maziausia = kategorijuKiekiai[0];
// const didziausia = kategorijuKiekiai[kategorijuKiekiai.length - 1];