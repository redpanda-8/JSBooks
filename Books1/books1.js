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
katalogas.forEach((kat) => {
  console.log(`Kategorija: ${kat.pavadinimas}`);

  kat.knygos.forEach((knyga) => {
    const sms = knyga.leidimoMetai === dbrMetai ? "(knyga nauja)" : "";
    console.log(`ISBN: ${knyga.ISBN}`);
    console.log(`Leidimo metais: ${knyga.leidimoMetai}${sms}`);
    console.log(`Pavadinimas: "${knyga.pavadinimas}"`);
    console.log(`Puslapių skaičius: ${knyga.puslapiuSkaicius}`);
    console.log(`Kiekis: ${knyga.kiekis}`);
    console.log(`Kaina: ${knyga.kaina} EUR`);
    console.log("-----------------------------------------------------------");
  });
});