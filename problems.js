function reverseString (value){
    if(typeof value !== "string"){
     
        return ("Please enter a string value");
    }
    const reverseStringValue = value.split("").reverse().join("");
    return reverseStringValue;
}


function vowelCount(value){
    const convert = value.toLowerCase();
    // console.log(convert);
    const vowelWord = ["a", "e", "i", "o", "u"];
    let vowel = [];
    if(typeof value !== "string"){
      
        return ("Enter a string value");
    }
    for(let i = 0; i < value.length; i ++){
        if(vowelWord.includes(convert[i])){
            vowel.push(convert[i])
        }
    }
     
    return vowel.length;
}


function palindrome(value) {
  let convert = value.toLowerCase();
  const reverseStringValue = convert.split("").reverse().join("");
  return reverseStringValue === convert;
}


function findMaximum(arr) {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max
}


function getUnique(arr) {
  let unique = [];
  arr.forEach((element) => {
    if (!unique.includes(element)) {
      unique.push(element);
    }
  });
  return unique;
}

function sumOfArr(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}


function findEven (arr){
    let evenNums = []; 
    for (let i = 0; i < arr.length ; i++){
        if(arr[i] % 2 === 0){
            evenNums.push(arr[i])
        }
    }
    return evenNums;
}



function capitalizeFirstWord(str) {
  let words = str.split(" ");
  let result = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let capitalWord = word[0].toUpperCase() + word.slice(1);
    result.push(capitalWord);
  }
  return result.join(" ");
}


function factorial (n){
    let result = 1;
    for(let i = 1;  i <= n; i++){
        result = result * i;
    }
    return result;
}


function pingPong() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    } else if (i % 3 === 0) {
      console.log("Ping");
    } else if (i % 5 === 0) {
      console.log("Pong");
    } else {
      console.log(i);
    }
  }
}

pingPong();

