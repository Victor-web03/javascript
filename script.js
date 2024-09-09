let todaysClass = 'Introduction to javascript'
console.log('Hello world');

let boilingPoint = '100'
console.log(boilingPoint);

boilingPoint = "60"
console.log(boilingPoint);

let myFirstsection = document.getElementById('div')
console.log(myFirstsection);

myFirstsection.style.backgroundColor = "yellow"
myFirstsection.style.width = '100'
myFirstsection.style.height = '100'
myFirstsection.style.innerHTML = `<img width= 100'
 height= '100' id= img'/>`
let myImage = document.getElementById(`img`)
console.log(myImage);

myImage.src = 'https://m.media-amazon.com/images/M/MV5BMTIzNDYzMzgtZWMzNS00ODc2LTg2ZmMtOTE2MWZkNzIxMmQ0XkEyXkFqcGdeQXVyNjQ3MDg0MTY@._V1_.jpg'
myImage.style.borderRadius = '5px'


let input = document.getElementById(`input1`)
//input.value =`3245668`
input.placeholder = `input here`
input.style.padding = `10px`
input.style.backgroundColor = `aquamarine`

let h1Tag = document.createElement(`h1`)
console.log(h1Tag)
h1Tag.textContent = `I am here`
myFirstsection.prepend(h1Tag)

//innerHTML
//innerText
//TextContent

let numOne = 3 * 5
let numTwo = 9

console.log(numOne == numTwo)

let a = 3
let b = 5
let sum = `the sum of ${a} and ${b} is ${a + b}`
console.log(sum)
let minimum = Math.min(3, 45, 67, 23, 39)
console.log(minimum)


let randomNumber = Math.floor(Math.random() * 80)
console.log(randomNumber);


let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
let country = 'Finland'
let city = 'Helsinki'
let language = 'JavaScript'
let job = 'teacher'
let age = 250
let fullName = firstName + ' ' + lastName

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.` //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`
console.log(personInfoTwo)
console.log(personInfoThree)


let number = 5
number > 0
    ? console.log(`${number} is a positive number`)
    : console.log(`${number} is a negative number`)
number = -5

number > 0
    ? console.log(`${number} is a positive number`)
    : console.log(`${number} is a negative number`)


//Square root
console.log(Math.sqrt(225))

let String = `victor is strong`
console.log(String.split())

let text = 'My name is Asabenah Yetayeh. I live in Finland, Helsinki. jonas'
let hisName = text.substr(48, 8)
console.log(hisName)

let string = 'Ja va script'
let spliter = string.split('')
console.log(spliter);


let string1 = '   30 Days Of JavaScript   '

console.log(string1)
console.log(string1.trim(' '))

console.log(string1.replaceAll(' ', ''))

let firstName1 = ' Asabeneh '

console.log(firstName1)
console.log(firstName1.trim())  // still removes spaces at the beginning and the end of the string

let string2 = '30 Days Of JavaScript'
console.log(string2.replace('JavaScript', 'Python')) // 30 Days Of Python

let herName = 'Sholape'
console.log(herName.charCodeAt())

let key = 'sunny'
switch (key) {
    case 'sunny':
        console.log(`it is sunny`)
        break;
    case (20 > 40):
        console.log(`it is rainy`)
    case (2 == 2):
        console.log(`it is cloudy`)
    default:
        console.log(`we dont know what thw weather is right now`)
        break;

}

// window.alert(`heyyy class`)
function helpDelete(params) {
    let confimer = window.confirm(`are you sure`)
    if (confimer) {
        alert(`delete successful`)
    } else {
        alert(`couldnt delete at the moment`)
    }


}
// window.alert(`heyyy class`)
alert(message)

alert('Welcome to 30DaysOfJavaScript')





