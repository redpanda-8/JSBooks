// Sukurkite knygų katalogo aplikaciją.

// 1. Sukurkite knygų katalogą - Katalogas turi būti masyvas, kurio elementai yra kategorijų objektai, o kategorijų objektams priskirtas knygų masyvas.
// Kataloge turi būti:
// 3 kategorijos
// 5 knygos kiekvienoje kategorijoje

// 2. Kategorijos objekto struktūra - Kiekvienas kategorijos objektas turi turėti:
{
    pavadinimas: "Informacinės technologijos",
    knygos: [
        // knygų objektų masyvas
    ]
}
 
// 3. Knygos objekto struktūra
// Kiekviena knyga turi turėti šias savybes:
{ ISBN: "IT-12345", leidimoMetai: 2019, pavadinimas: "Programavimas linksmai", puslapiuSkaicius: 250, kiekis: 12, kaina: 25 }

// 4. Duomenų struktūros pradžios pavyzdys (pagal jūsų išvedimo pavyzdį):
const katalogas = [
    {
        pavadinimas: "Informacinės technologijos",
        knygos: [
            {
                ISBN: "IT-12345",
                leidimoMetai: 2019,
                pavadinimas: "Programavimas linksmai",
                puslapiuSkaicius: 250,
                kiekis: 12,
                kaina: 25
            },
            {
                ISBN: "IT-12346",
                leidimoMetai: 2018,
                pavadinimas: "WEB technologijos",
                puslapiuSkaicius: 350,
                kiekis: 50,
                kaina: 30
            }
            // … dar 3 knygos šioje kategorijoje
        ]
    },
    {
        pavadinimas: "Fantastika",
        knygos: [
            // 5 knygos
        ]
    },
    {
        pavadinimas: "Romanai",
        knygos: [
            // 5 knygos
        ]
    }
];

// 5. Išvedimas į naršyklės konsolę:
// Parašykite kodą, kuris:
// pereina per visą katalogą,
// išveda kategorijos pavadinimą, tada
// išveda VISAS jos knygas tokiu formatu:
// Kategorijos pavadinimas: Informacinės technologijos
//     ISBN: IT-12345
//     Leidimo metais: 2019 (jeigu knyga nauja, išvesti pranešimą skliausteliuose)
//     Pavadinimas: “Programavimas linksmai”
//     Puslapių skaičius: 250
//     Kiekis: 12
//     Kaina: 25 EUR
// ---------------------------------------------------------------------------------------------------------------------------------
 
//     ISBN: IT-12346
//     Leidimo metais: 2018
//     Pavadinimas: “WEB technologijos”
//     Puslapių skaičius: 350
//     Kiekis: 50
//     Kaina: 30 EUR
// -----------------------------------------------------------------------------------------------------------------------------------------
// ...
// Kategorijos pavadinimas: Fantastika
// ...
 
// Žinutė "(knyga nauja)" turi būti rodoma, jei leidimoMetai sutampa su einamaisiais metais.