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

function stringCopy (str, n) {
  if (n < 0){
    return false}
  else {
  return str.repeat(n)
  }
}
console.log(stringCopy("Hello", 1));
console.log(stringCopy("Hello", -1));

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

function sum2(number)
{
  return number[0] + number[1] + number[2];
}
console.log(sum2([7, 1, 2]));  

//Exercise 9

function check1and3(number1){
    if (number1.indexOf(1) != -1 || number1.indexOf(3) != -1){
        return "Array contains 1 or 3"
    } else {
        return "Array does not contain 1,3"
    }
}

console.log(check1and3([1,2]));
console.log(check1and3([4,2]));

//Exercise 10

function check1and3_opposite(number2){
    if (number2.indexOf(1) === -1 && number2.indexOf(3) == -1){
        return "Array DOES NOT contain 1 or 3"
    } else {
        return "Array contains 1,3"
    }
}

console.log(check1and3([1,2]));
console.log(check1and3([4,2]));

//Exercise 11

function longestString(string1) {
    let max = string1[0].length;
    string1.map(x => max = Math.max(max, x.length));
    result = string1.filter(x => x.length == max);
    return result;
  }
  
  console.log(longestString(['ab', 'a', 'abc','abcdefg','abcd']))


//Exercise 12

let angle = 180

if(angle >=0 && angle < 90){
    console.log("Acute angle")
} 
if(angle === 90){
    console.log("Right angle")
}
if(angle >90 && angle < 180){
    console.log("Obtuse angle")
} 
if(angle ===180){
    console.log("Straight angle")
} 

//Exercise 13

function indexOfMax(arr) {
    if (arr.length === 0) {
        return -1;
    }

    var max = arr[0];
    var maxIndex = 0;

    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            maxIndex = i;
            max = arr[i];
        }
    }

    return maxIndex;
}
console.log("The index of the greatest value: ", indexOfMax([1,2,37,4,5,6,3]))

//Exercise 14

function maxEven(array) {

    array.sort((x, y) => y - x);
  
    for (let i = 0; i < array.length; i++) {
      if (array[i] % 2 == 0)
        return array[i];
      }
    }

  console.log(maxEven([10, 30, 50, 53]));
  

  //Exercise 15

  let x1 = 50
  let y1 = 40

  if(x1+y1 === 50 || x1 === 50 || y1 === 50){
      console.log("True")
  } else{
      console.log("False")
  }

  //Exercise 16

  let x2 = -2
  let y2 = 1

if((x2 < 0 && y2 > 0) || x2 > 0 && y2 < 0){
    console.log("True")
} else {
    console.log("False")
}

//Exercise 17

function lowerCase(str) {
    if (str.length < 3) {
      return str.toUpperCase();
    }
    front = (str.substring(0, 3)).toLowerCase();
    back = str.substring(3, str.length);  
    return front + back;
  }
  console.log(lowerCase("YOUTUBE"));
  console.log(lowerCase("yo"));

  //Exercise 18 

  let x3 = 30
  let y3 = 4
  let sum3 = x3+y3
  if(sum3>=50 && sum3 <=80){
      console.log("65")
  }else {
      console.log("80")
  }

  //Exercise 19

    const convert = (raindrop) => {
    let sound = raindrop % 3 == 0 ? "Pling" : "";
    
    if (raindrop % 5 == 0) sound += "Plang";
    if (raindrop % 7 == 0) sound += "Plong";
  
    return sound || raindrop.toString();
  };

  console.log(convert(34));


 //Exercise 20

 function acronym(s){
    let words
    let acronym
    let nextWord
    words = s.split(' ');
    acronym= "";
    index = 0
    while (index<words.length) {
            nextWord = words[index];
            acronym = acronym + nextWord.charAt(0);
            index = index + 1 ;
    }
    return acronym
}

console.log(acronym("Central Intelligence Agency"))
