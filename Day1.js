//Exercise 1
let x = 10
let y = 10

sum = x+y

if(x===y) {
    console.log("Triple sum: ", sum*3)
} else {
    console.log("Sum: ", sum)
}

//Exercise 2

let num = 50
let num1 = 2

if(num+num1 === 50 || num===50 || num1===50){
    console.log("True")
} else{
    console.log("False")
}

//Exercise 3

let string = "Strive"
let newString = string.replace('i','')
console.log(newString)

//Exercise 4

let num2 = 59
let num3 = 10
let num4 = 3

if (num2>num3){
    highestNum = num2
} else {
    highestNum = num3
}
if (num4>highestNum){
    highestNum = num4
}
console.log(highestNum)

//Exercise 5

num5 = 70
num6 = 89

if((num5 >= 40 && num5 <= 60 && num6 >= 40 && num6 <= 60) ||(num5 >= 70 && num5 <= 100 && num6 >= 70 && num6 <= 100)){
    console.log("True")
} else {
    console.log("False")
}

//Exercise 6


//Exercise 7 

function city(string) {
    if (string.length >= 3 && ((string.substring(0, 3) == 'Los') || (string.substring(0, 3) == 'New'))) {
            return string;
      }
    return '';
  }
  
  console.log(city("New York"));
  console.log(city("Dallas"));
  console.log(city("Los Angeles"));

//Exercise 8