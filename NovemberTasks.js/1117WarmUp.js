// 1. firstHalf  ____________________________________________________________________________________________________________________________________________________________________
// Given a string of even length, return the first half. So the string "WooHoo" yields "Woo".
// firstHalf("WooHoo") → "Woo"           firstHalf("HelloThere") → "Hello"           firstHalf("abcdef") → "abc"
function firstHalf(str) {
  return str.slice(0, str.length / 2);
}
console.log(firstHalf("WooHoo"));      // "Woo"
console.log(firstHalf("HelloThere"));  // "Hello"
console.log(firstHalf("abcdef"));      // "abc"
// const firstHalf = str => str.slice(0, str.length / 2);

// 2. seeColor  ____________________________________________________________________________________________________________________________________________________________________
// Given a string, if the string begins with "red" or "blue" return that color string, otherwise return the empty string.
// seeColor("redxx") → "red"             seeColor("xxred") → ""          seeColor("blueTimes") → "blue"
function seeColor(str) {
  if (str.startsWith("red")) return "red";
  if (str.startsWith("blue")) return "blue";
  return "";
}
console.log( seeColor("redxx") );      // "red"
console.log( seeColor("xxred") );      // ""
console.log( seeColor("blueTimes") );  // "blue"

// const seeColor = str =>
//   str.startsWith("red") ? "red" :
//   str.startsWith("blue") ? "blue" : "";

// 3. alarmClock  ____________________________________________________________________________________________________________________________________________________________________
// Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a boolean indicating if we are on vacation, 
// return a string of the form "7:00" indicating when the alarm clock should ring. Weekdays, the alarm should be "7:00" and on 
// the weekend it should be "10:00". Unless we are on vacation -- then on weekdays it should be "10:00" and weekends it should be "off".
// alarmClock(1, false) → "7:00"      alarmClock(5, false) → "7:00"     alarmClock(0, false) → "10:00"
function alarmClock(day, vacation) {
  const isWeekend = day === 0 || day === 6;
  if (vacation) {
    return isWeekend ? "off" : "10:00";
  } else {
    return isWeekend ? "10:00" : "7:00";
  }
}
console.log(alarmClock(1, false)); // "7:00"
console.log(alarmClock(5, false)); // "7:00"
console.log(alarmClock(0, false)); // "10:00"

// function alarmClock(day, vacation) {
//   const weekend = day === 0 || day === 6;
//   return vacation
//     ? (weekend ? "off" : "10:00")
//     : (weekend ? "10:00" : "7:00");
// }
// function alarmClock(day, vacation) {
//   const weekend = day === 0 || day === 6;
//   if (vacation && weekend) {
//     return "off";
//   }
//   if (vacation && !weekend) {
//     return "10:00";
//   }
//   if (!vacation && weekend) {
//     return "10:00";
//   }
//   // lieka vienintelis variantas: !vacation && !weekend
//   return "7:00";
// }