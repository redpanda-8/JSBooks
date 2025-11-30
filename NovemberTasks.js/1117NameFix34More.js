// vienmatį masyvą su vardais  _____________________________________________________________________________________________________________________________________________
// Parašykite programą, kuri naudoja vienmatį masyvą su vardais. Programa turi išvesti tik tuos vardus, kuriuose nėra draudžiamų simbolių. 
// Reikalavimai: Sukurkite vienmačio masyvo kintamąjį names, kuriame būtų bent 8 vardai. Sukurkite masyvą forbidden, kuriame bus simboliai, 
// kurių vardai negali turėti (pvz.: ['a', '!', 'ė']). Programa turi pereiti per visus vardus ir praleisti tuos, kuriuose randamas bent vienas 
// draudžiamas simbolis. Išveskite tik tuos vardus, kurie atitinka kriterijus (t. y. neturi draudžiamų simbolių). 
// Pavyzdys Duota: names = ["Jonas", "Petras", "A!sta", "Mėta", "Lukas", "Ina"] forbidden = ["!", "ė", "a"] Išvedimas: Petras Lukas Ina
const names = [ "Jonas", "Petras", "A!sta", "Mėta", "Lukas", "Ina", "Tomas", "Ugnius" ];

const forbidden = ["!", "ė", "a"];
// for of - ima reikšmes, ne index  _______  for in - per index
for (let name of names) {
  let hasForbidden = false;
  for (let symbol of forbidden) {
    if (name.includes(symbol)) {
      hasForbidden = true;
      break;
    }
  }
  if (!hasForbidden) {
    console.log(name);
  }
}
// names
//   .filter(name => !forbidden.some(sym => name.includes(sym)))
//   .forEach(name => console.log(name));

// fix34 / fixArray _________________________________________________________________________________________________________________________________________________________
// Parašyk funkciją fixArray, kuri: Priima skaičių masyvą. Grąžina tą patį masyvą, tik permaišytą taip, kad: kiekvienas skaičius 3 masyve visada būtų iškart prieš skaičių 4;
// pačių 3 pozicijos negali keistis, t. y. jų indeksai turi likti tokie patys; visi kiti skaičiai (įskaitant 4) gali būti stumdomi, jei reikia.
// Papildomos sąlygos: Masyve yra vienodas kiekis 3 ir 4. Po kiekvieno 3 masyve jau yra kažkoks skaičius (t. y. 3 niekada nebus paskutinis elementas).
// Skaičius 3 masyve atsiranda anksčiau nei bet kuris 4.
// Rezultatas:
// fix34([1, 3, 1, 4]) // → [1, 3, 4, 1]
// fix34([1, 3, 1, 4, 4, 3, 1]) // → [1, 3, 4, 1, 1, 3, 4]
// fix34([3, 2, 2, 4]) // → [3, 4, 2, 2]
function fix34(nums) {
  let fourIndex = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 3) {
      // randam sekantį 4
      while (nums[fourIndex] !== 4) {
        fourIndex++;
      }
      // sukeičiam 4 su elementu po 3
      let temp = nums[i + 1];
      nums[i + 1] = nums[fourIndex];
      nums[fourIndex] = temp;
      fourIndex++;
    }
  }
  return nums;
}
console.log(fix34([1, 3, 1, 4]));  // [1, 3, 4, 1]
console.log(fix34([1, 3, 1, 4, 4, 3, 1])); // [1, 3, 4, 1, 1, 3, 4]
console.log(fix34([3, 2, 2, 4])); // [3, 4, 2, 2]

// More __________________________________________________________________________________________________________________________________________________________________
// Duotas sveikųjų skaičių masyvas. Grąžink true, jeigu masyve esančių "1" skaičių yra daugiau negu masyve esančių "4" skaičių. 
// Rezultatas: daugiau1([1, 4, 1]) → true        daugiau1([1, 4, 1, 4]) → false       daugiau1([1, 1]) → true
function daugiau1(nums) {
  let count1 = 0;
  let count4 = 0;
  for (let n of nums) {
    if (n === 1) {
      count1++;
    } else if (n === 4) {
      count4++;
    }
  }
  return count1 > count4; // jei 1 > nei 4 → true
}
console.log(daugiau1([1, 4, 1]));      // true
console.log(daugiau1([1, 4, 1, 4]));   // false
console.log(daugiau1([1, 1]));         // true

// function daugiau1(nums) {
//   const ones = nums.filter(n => n === 1).length;
//   const fours = nums.filter(n => n === 4).length;
//   return ones > fours;
// }