// 1. sleepIn ___ The parameter weekday is true if it is a weekday, and the parameter vacation is true if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return true if we sleep in.
// sleepIn(false, false) → true         sleepIn(true, false) → false        sleepIn(false, true) → true
function sleepIn(weekday, vacation) {
  if (!weekday || vacation) {return true;
  } else { return false; }
}
console.log(sleepIn(false, false)); // true
// const sleepIn = (weekday, vacation) => !weekday || vacation;

// 2. diff21 ___ Given an int n, return the absolute difference between n and 21, except return double the absolute difference if n is over 21.
// diff21(19) → 2          diff21(10) → 11         diff21(21) → 0
function diff21(n) {
  const diff = Math.abs(n - 21);
  if (n > 21) {
    return diff * 2;
  } else {return diff;}
}
console.log(diff21(19));            // 2
// const diff21 = n => n > 21 ? Math.abs(n - 21) * 2 : Math.abs(n - 21);

// 3. nearHundred ___ Given an int n, return true if it is within 10 of 100 or 200. Note: Math.abs(num) computes the absolute value of a number.
// nearHundred(93) → true          nearHundred(90) → true          nearHundred(89) → false
function nearHundred(n) {
  if (Math.abs(n - 100) <= 10 || Math.abs(n - 200) <= 10) {
    return true;
  } else {return false;}
}
console.log(nearHundred(93));       // true
// const nearHundred = n => Math.abs(n - 100) <= 10 || Math.abs(n - 200) <= 10;

// 4. backAround ___ Given a string, take the last char and return a new string with the last char added at the front and back, so "cat" yields "tcatt". The original string will be length 1 or more.
// backAround("cat") → "tcatt"         backAround("Hello") → "oHelloo"         backAround("a") → "aaa"
function backAround(str) {
  const last = str[str.length - 1];
  return last + str + last;
}
console.log(backAround("cat"));     // tcatt
// const backAround = str => str.slice(-1) + str + str.slice(-1);

// 5. startHi ___ Given a string, return true if the string starts with "hi" and false otherwise.
// startHi("hi there") → true          startHi("hi") → true        startHi("hello hi") → false
function startHi(str) {
  if (str.startsWith("hi")) {return true;
  } else {return false;}
}
console.log(startHi("hi there"));   // true
// const startHi = str => str.startsWith("hi");

// 6. mixStart ___ Return true if the given string begins with "mix", except the 'm' can be anything, so "pix", "9ix" .. all count.
// mixStart("mix snacks") → true           mixStart("pix snacks") → true       mixStart("piz snacks") → false
function mixStart(str) {
  if (str.substring(1, 3) === "ix") {return true;
  } else {return false;}
}
console.log(mixStart("pix snacks"));// true

// 7. Tea party 
// We are having a party with amounts of tea and candy. Return the int outcome of the party encoded as 0=bad, 1=good, or 2=great. A party is good (1) 
// if both tea and candy are at least 5. However, if either tea or candy is at least double the amount of the other one, the party is great (2). However, in all cases, 
// if either tea or candy is less than 5, the party is always bad (0).
// teaParty(6, 8) → 1          teaParty(3, 8) → 0          teaParty(20, 6) → 2
function teaParty(tea, candy) {
  if (tea < 5 || candy < 5) {return 0;}
  if (tea >= candy * 2 || candy >= tea * 2) {return 2;}
  return 1;
}
console.log(teaParty(20, 6));       // 2
// const teaParty = (tea, candy) =>
//   tea < 5 || candy < 5 ? 0 :
//   tea >= candy * 2 || candy >= tea * 2 ? 2 : 1;