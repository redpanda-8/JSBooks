// Servisas _________________________________________________________________________________________________________________________________________________________________
// taisantis įvairius elektronikos įrenginius, kaupia informaciją apie klientus ir jų pateiktus įrenginius.
// Kiekvienas klientas gali atnešti vieną ar kelis įrenginius, o kiekvienam įrenginiui registruojama: jo tipas (telefonas, kompiuteris, planšetė ir t. t.),
// serviso būsena, remonto kaina (jei įrenginys sutaisytas), kiek valandų užtruko taisymas.
// Naudoti tik bazinius JavaScript įrankius: FOR ciklus ir IF/ELSE. NENAUDOTI map, filter, reduce, forEach ir jokių kitų masyvų metodų.
// Duomenų struktūra - Turite pateiktą masyvą customers, kuriame saugoma informacija apie servisą aplankiusius klientus:
const customers = [
  { name: "Jonas",
    devices: [
      { type: "telefonas", status: "sutaisyta", price: 80, hours: 2 },
      { type: "kompiuteris", status: "taisoma", price: 0, hours: 3 }
    ]
  },
  { name: "Agnė",
    devices: [
      { type: "planšetė", status: "nepataisoma", price: 0, hours: 1 },
      { type: "telefonas", status: "sutaisyta", price: 60, hours: 2 },
      { type: "laikrodis", status: "laukiama", price: 0, hours: 0 }
    ]
  },
  { name: "Mantas",
    devices: [ { type: "kompiuteris", status: "sutaisyta", price: 120, hours: 4 } ]
  }
];
// Galimos įrenginių būsenos: "laukiama" – klientas paliko įrenginį,"taisoma" – dabar taisomas, "sutaisyta" – sutaisytas, "nepataisoma" – nepavyko sutaisyti
// 1) Suskaičiuokite bendrą sutaisytų įrenginių kiekį  __________________________________________________________________________________________________
// Reikia pereiti per visus klientus ir jų įrenginius. Į skaičių įtraukiami tik įrenginiai, kurių:          status === "sutaisyta" 
// Išvedimo pavyzdys:  Sutaisytų įrenginių: 3
let sutaisytaKiekis = 0;
for (let i = 0; i < customers.length; i++) {
  const customer = customers[i];

  for (let j = 0; j < customer.devices.length; j++) {
    const device = customer.devices[j];
    if (device.status === "sutaisyta") sutaisytaKiekis++;
  }
}
console.log("Sutaisytų įrenginių:", sutaisytaKiekis);

// 2) Apskaičiuokite bendras serviso pajamas ____________________________________________________________________________________________________________
// Į pajamų sumą įeina visų sutaisytų įrenginių price reikšmės.   (price visada 0, jei įrenginys nesutaisytas.)
// Išvedimo pavyzdys:  Bendros pajamos: 260 € 
let bendrosPajamos = 0;
for (let i = 0; i < customers.length; i++) {
  const customer = customers[i];

  for (let j = 0; j < customer.devices.length; j++) {
    const device = customer.devices[j];
    if (device.status === "sutaisyta") {bendrosPajamos += device.price;}
  }
}
console.log("Bendros pajamos:", bendrosPajamos, "€");

// 3) Apskaičiuokite vidutinį sutaisytų įrenginių taisymo laiką (valandomis) ____________________________________________________________________________
// Vidurkį apskaičiuokite taip:  susumuokite visų sutaisytų įrenginių hours reikšmes, suskaičiuokite, kiek iš viso yra sutaisytų įrenginių,  padalinkite suma / kiekis.
// Išvedimo pavyzdys:   Vidutinis taisymo laikas: 2.67 val.
let sumaValandu = 0;
let sutaisytuIrenginiu = 0;
for (let i = 0; i < customers.length; i++) {
  const customer = customers[i];

  for (let j = 0; j < customer.devices.length; j++) {
    const device = customer.devices[j];

    if (device.status === "sutaisyta") {
      sumaValandu += device.hours;
      sutaisytuIrenginiu++;
    }
  }
}
let vidurkis = sumaValandu / sutaisytuIrenginiu;
console.log("Vidutinis taisymo laikas:", vidurkis.toFixed(2), "val.");

// 4) Išveskite, kiek įrenginių turi kiekvienas klientas ________________________________________________________________________________________________
// Nenaudokite devices.length. Kiekį suskaičiuoti privaloma naudojant for ciklą.
// Išvedimo pavyzdys:   Jonas turi 2 įrenginius   Agnė turi 3 įrenginius   Mantas turi 1 įrenginį
for (let i = 0; i < customers.length; i++) {
  const customer = customers[i];
  let kiekis = 0;
  for (let j = 0; j < customer.devices.length; j++) {kiekis++;}
  if (kiekis === 1) {
    console.log(customer.name + " turi 1 įrenginį");
  } else {console.log(customer.name + " turi " + kiekis + " įrenginius");}
}

// 5) (Papildoma užduotis) Suskaičiuokite įrenginių kiekius pagal būsenas ______________________________________________________________________________
// Suskaičiuokite: kiek įrenginių yra "laukiama",  kiek — "taisoma",  kiek — "sutaisyta",  kiek — "nepataisoma"
// Išvedimo pavyzdys:   Laukiama: 1 Taisoma: 1 Sutaisyta: 3 Nepataisoma: 1 
let laukiama = 0, taisoma = 0, sutaisyta = 0, nepataisoma = 0;
for (let i = 0; i < customers.length; i++) {
  const customer = customers[i];
  for (let j = 0; j < customer.devices.length; j++) {
    const device = customer.devices[j];
    if (device.status === "laukiama") laukiama++;
    else if (device.status === "taisoma") taisoma++; 
    else if (device.status === "sutaisyta") sutaisyta++;
    else if (device.status === "nepataisoma") nepataisoma++;
  }
}
console.log( "Laukiama:", laukiama, "Taisoma:", taisoma, "Sutaisyta:", sutaisyta, "Nepataisoma:", nepataisoma);