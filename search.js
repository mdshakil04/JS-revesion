const lyrics = "Amar Sonar Moyna Pakhi";
const mainString = lyrics.toLowerCase()
const doesExist = mainString.toLowerCase().includes("pakhi");
// console.log(doesExist)
// console.log(lyrics.indexOf("Moyna"))

const lengthWay = lyrics.charAt(lyrics.length -5);
// console.log(lengthWay)
const sliceWay = lyrics.slice(0, 3);
// console.log(sliceWay)
const atWay = lyrics.at(5);
// console.log(atWay)
const parts = lyrics.split(" ")
console.log(parts)