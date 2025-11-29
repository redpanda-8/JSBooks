// MAP
// 1) Naudodami map, sukurkite naują masyvą su visų knygų pavadinimais (be pasikartojimų kategorijose).
// 2) Naudodami map, sukurkite masyvą objektų, kuriuose būtų:
{
  kategorija: "...",
  pavadinimas: "...",
  pilnasPavadinimas: "Kategorija - Knygos pavadinimas"
}
// 3) Naudodami map, kiekvienai knygai apskaičiuokite bendrą vertę sandėlyje (kiekis * kaina) ir grąžinkite masyvą su tokiais objektais:
{
  ISBN: "...",
  pavadinimas: "...",
  verte: 123
}
// FILTER
// 4) Naudodami filter, išrinkite naujas knygas – tas, kurių leidimoMetai yra lygūs einamiesiems metams.
// 5) Naudodami filter, išrinkite brangias knygas, kurių kaina didesnė už, pavyzdžiui, 30 EUR.
// 6) Naudodami filter, sukurkite naują kategorijų masyvą, kuriame liktų tik tos kategorijos, kurių bent viena knyga turi daugiau nei 300 puslapių.

// REDUCE
// 7) Naudodami reduce, suskaičiuokite bendrą visų knygų kiekį kataloge (visose kategorijose).
// 8) Naudodami reduce, suskaičiuokite bendrą katalogo vertę eurais, t. y. visų knygų (kiekis * kaina) sumą.
// 9) Naudodami reduce, suskaičiuokite, kiek iš viso puslapių turėtų visos knygos, jei jas visas sudėtume (suma puslapiuSkaicius * kiekis).

// SORT
// 10) Naudodami sort, išrikiuokite vienos pasirinktos kategorijos knygas pagal leidimo metus didėjančia tvarka.
// 11) Naudodami sort, išrikiuokite visas katalogo knygas pagal kainą mažėjančia tvarka.
// 12) Naudodami sort, išrikiuokite kategorijų masyvą pagal kategorijos pavadinimą abėcėlės tvarka.

// MIN + MAX
// 13) Raskite pigiausią knygą kataloge (mažiausia kaina) ir išveskite jos kategoriją, pavadinimą ir kainą.
// 14) Raskite brangiausią knygą kataloge (didžiausia kaina).
// 15) Raskite seniausią ir naujausią knygą pagal leidimoMetai.
// 16) Raskite, kurios kategorijos knygų bendras kiekis (viso egzempliorių) yra didžiausias ir mažiausias ( galima imtireduce su Math.max / Math.min / sort).