//age == 2.5 dog years
{
let myAge= prompt("How old are you?")
//1st 2 years == 10.5 dog years
let earlyYears = 2
earlyYears *= 10.5
//1st 2 years taken care of my above calc
myAge -= 2 
//reassigning value of myage
let laterYears = myAge
//
laterYears *= 4
console.log(earlyYears)
console.log(laterYears)
//self explainitory
myAgeInDogYears = earlyYears+laterYears
//lower case
let myName = 'tim'.toLowerCase()
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
}