// Conditional statments, loop arrays  -  Switch, for in, for of, decomposition, conditional operator / ternary
// Switch - priskirti reiksme pagal salyga
const lang = "en";
switch(lang){
    case"lt":
        console.log("Sveiki");
        break;
    case"en":
        console.log("Hello");
        break;
    case"it":
        console.log("Ciao");
        break;
    default:
        console.log("Nznau kalbos");
}

// conditional operator / ternary - priskirti reiksme pagal kintamaji
const age = 36;
const drink  = age >=21? "Beer" : "Juice";
console.log(drink);
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const students = ["Ieva", "Tomas", "Darius", "Kristina", "Tinka", "Vika"]; // array


for(let i=0; i < students.length; i++){
    // siti du vienodi
    console.log("Skaitliuko reiksme: " + i) 
    console.log(students[i])
}

for (const key in students){
    console.log(key) // eina per index
}
for (const key in students){
    console.log(students[key]) // eina per elements reiksme -ir su if ir array
}
for(const student of students){
    console.log(student); // array element reiksme - negalima ant object
}
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
const student = {  //obejct
    id: 1,
    name: "Tadas",
    lastname: "Tadaitis",
    status: "active;"
}
for (const property in student){
    console.log(property) //gaunam object all properties id, name .. 
}
for (const property in student){
    console.log(student[property]) //gaunam object all properties reiksmes
}
for (const property in student){
    console.log(`${property} : ${student[property]}`) //gaunam all properties + reiksmes
}
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
for(const student of students){
    if(student == "Tomas"){
        console.log("Rastas studentas vardu: " +student)
        break;
    }
    console.log(student);
}
for(const student of students){
    if(student == "Tomas"){
        console.log("Rastas studentas vardu: " +student)
        continue; //kai randa Tomas > nebevykdo console.log > permeta i sekancia iteracija
    }
    console.log(student);
}
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Kodo refactory - dekompozition
const names = [ "Jonas", "Petras", "A!sta", "Mėta", "Lukas", "Ina", "Tomas", "Ugnius" ];

const forbidden = ["!", "ė", "a"];

function hasForbiddenSymbol (name, forbidden){
    for (const symbol of forbidden) {
        if (name.toLowerCase().includes(symbol)) {
        return true;
        }
    }
    return false;
}
function filterNames(name, forbidden){
    let result = [];
    for(const name of names){
        if(!hasForbiddenSymbol(name, forbidden)){
            result.push(name);
        }
    }
    return result;
}
function printNames(names){
    for(const name of names){
        console.log(name)
    }
}
printNames(filterNames(names, forbidden));
// isvesti vardus, kurie yra 5 simboliu ilgio
function printString(text){
    if(text.length > 5){
        return text
    } return false
}
printString("labai")

// for of - ima reikšmes, ne index  _______  for in - per index
// for (let name of names) {
//   let hasForbidden = false;
//   for (let symbol of forbidden) {
//     if (name.includes(symbol)) {
//       hasForbidden = true;
//       break;
//     }
//   }
//   if (!hasForbidden) {
//     console.log(name);
//   }
// }
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------