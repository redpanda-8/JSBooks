// ----------------------------------------   1    ---------------------------------------
kat => kat.knygos.map(knyga => knyga.pavadinimas)
// YRA TAS PATS KAS 
function pavadinimuiGauti(kat) {
  return kat.knygos.map(function(knyga) {
    return knyga.pavadinimas;
  });
}
// ----------------------------------------   2    ---------------------------------------
const padvigubinti = x => x * 2;
// YRA TAS PATS KAS 
function padvigubinti(x) {
  return x * 2;
}
// ------------------------------- 🍎 Pavyzdys su vaisiais  -----------------------------
const vaisiai = [
  {
    tipas: "citrusiniai",
    sarasas: [
      { pavadinimas: "Apelsinas", kalorijos: 47 },
      { pavadinimas: "Citrina", kalorijos: 29 }
    ]
  },
  {
    tipas: "uogos",
    sarasas: [
      { pavadinimas: "Braškė", kalorijos: 33 },
      { pavadinimas: "Mėlynė", kalorijos: 57 }
    ]
  }
];
// arrow function version    -----------------------------------------------------------------------------------
const visiVaisiai = vaisiai.flatMap(
  v => v.sarasas.map(f => f.pavadinimas)
);
console.log(visiVaisiai);

// v => ...                 Paimk vieną vaisių grupę
// v.sarasas.map(...)       Eik per jos vaisių sąrašą 
// f => f.pavadinimas       Iš kiekvieno vaisiaus paimk pavadinimą
// v => v.sarasas.map(f => f.pavadinimas)    Iš kiekvienos grupės paimti jos sąrašą, iš kiekvieno elemento paimti jo pavadinimą

// full version             -------------------------------------------------------------------------------------
const visyVaisiai = vaisiai.flatMap(function(vaisiuGrupe) {
  return vaisiuGrupe.sarasas.map(function(vaisius) {
    return vaisius.pavadinimas;
  });
});
console.log(visyVaisiai);

// function(vaisiuGrupe) - pirmas lygis
// vaisiuGrupe.sarasas - masyvas
// map(function(vaisius)) - antras lygis
// return vaisius.pavadinimas - ką grąžinam

// --------------------------------------------------------------------------    MAP  VS  FOREACH    ---------------------
// map - grąžina kuria naują masyvą
// forEach - tik „praeina“, bet nieko negrąžina
// flatMap - naudojam, kai turim masyvą masyvuose   -   Objektą grąžinam su ({ ... })
// filter - grąžina naują masyvą (tik atrinkimas)
// reduce - sukuria vieną galutinę reikšmę
// sort() - MODIFIKUOJA ORIGINALŲ MASYVĄ -  gera praktika – pasidaryti kopiją (kad nesugadinti) [...katalogas]
// sort - Rikiuoja kaip tekstą, o ne kaip skaičius tdl reikia palyginimo funkc, kai rikiuojam skaičius
// sort - skaičiams - (a, b) => a - b     Tekstui - localeCompare
// sort - sort lėtas dideliems masyvams, keičia eiliškumą, reikia papildomo darbo su kategorija
// find - grąžina vieną objektą, ne masyvą


// Readable code > micro-optimizations
// 90 %:   problemų yra network,  didelės bibliotekos,  per daug renderių,  netinkamos struktūros

// ------------------------------------------------------------------------------------ For if else  --------------------------
// for of - ima reikšmes, ne index  _______  for in - per index

// Kai reikia sudėti reikšmes pagal sąlygą, visada:
// 1 susikuri suminį kintamąjį
// 2 eini per duomenis su for
// 3 tikrini su if
// 4 pridedi

// Vidurkis VISADA = suma / kiekis     Todėl: visada reikia 2 kintamųjų IR skaičiuojam abu tame pačiame cikle
// Skaičiavimas su ciklu visada reiškia: 
// let count = 0;
// for (...) {
//   count++;
// }

// Jei reikia suskirstyti duomenis į kategorijas –
// - darome atskirus skaitiklius
// - if / else if / else