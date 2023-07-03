// // anonymous function
// var value =[12,45,2,45,36,48,15,6,86,7,4,9];
// var result=[];
// function odd(value){
//     for(var i=0;i<value.length;i++){
//         if(value[i]%2!=0){
//             result.push(value[i])
//         }
//     }
//    return result;
// }
// console.log(odd(value))
/////////////////////////////////////
//IIFE Function


// (function odd(value1){
//     var result1=[];
//     for(var i=0;i<value1.length;i++){
//         if(value1[i]%2!=0){
//             result1.push(value1[i]);
//         }
//     }
//    console.log(result1)
// }

// )([12,45,2,45,36,48,15,6,86,7,4,9])
/////////////////////////////////////////////
//arrow Function
// var odd=(value)=>{
//     var result=[];
//     for(var i=0;i<value.length;i++){
//         if(value[i]%2!=0){
//             result.push(value[i]);
//         }
//     }
//     return result;
// }
// console.log(odd([12,45,6,3,8,2,7,6,46]));

//////////////////////////////////////////////////////////////////
//Convert all the strings to title caps in a string array

// //anonymous function

// function convert(arr){
//    let words=arr.toLowerCase().split(" ");
//    for(let i=0;i<words.length;i++){ 
//       words[i]=words[i][0].toUpperCase() +words[i].slice(1);
//    }
// return words.join(" ")
// }
// let arr="this is guvi"
// console.log(convert(arr));

// ////////////////////// 

// //IIFE function
// (function convert(arr){
//    let word=arr.toLowerCase().split(" ");
//    for(let i=0;i<word.length;i++){
//    word[i]=word[i][0].toUpperCase()+word[i].slice(1);
// }
// console.log(word.join(" "))
// }
// )("this is guvi")

// ///////////////////

// //arrow Function
// var convert=(arr)=>{
//    let word=arr.toLowerCase().split(" ");
//    for(let i=0;i<word.length;i++){
//    word[i]=word[i][0].toUpperCase()+word[i].slice(1);
// }
// return word.join(" ")
// }
// console.log(convert("this is guvi"));
////////////////////////////////////////////////////////////////////
//Sum of all numbers in an array
//anonymous function
// var sum =[12,45,6,3,8,2,7,6,46];
// var sum1=0
// function plus(sum){
// for(var i=0;i<sum.length;i++){
//     sum1=sum[i]+sum1
// }
// return sum1
// }
// console.log(plus(sum))
////////////////////////////////
//IIFE function
// (function add(sum){
//     var sum1=0;
//     for(var i=0;i<sum.length;i++){
//         sum1=sum[i]+sum1;
//     }
// console.log(sum1);
// }
// )([12,45,6,3,8,2,7,6,46]);
///////////////////////////////
//Arrow Function

// var totel=(value)=>{
//     var add=0;
//     for(var i=0;i<value.length;i++){
//         add=value[i]+add;
//     }
//     return add;
// }
// console.log(totel([12,45,6,3,8,2,7,2,6,46]))

////////////////////////////////////////////////////////////////
// Return all the prime numbers in an array
//anonymous function

// function isprimenum(arr){
//    function isprime(num){
//       if(num<2){
//       return false
//    }
//    for(var i=2;i<=Math.sqrt(num);i++){
//       if(num%i==0){
//          return false
//       }
//    }
// return true
// }
// return arr.filter(function(num){
//    return isprime(num); 
// });
// }

// var num =[1,2,3,4,5,6,7,8,9,10,11,112,13]
// console.log(isprimenum(num))
// //////////////////////
//IIFE
// (function primeNum(ArrValue) {
//     ArrValue = ArrValue.filter((number) => {
//     for (let i = 2; i <= Math.sqrt(number); i++) {
//       if (number % i === 0) return false;
//     }
//     return true;
//   });

//   console.log(ArrValue);
// })([2, 4, 7, 8, 9, 10, 15, 17, 19, 31, 39, 25, 61, 80]); 
 ////////////////
 //Arrow Function
//  let primeNum = (ArrValue) => {
//     ArrValue = ArrValue.filter((number) => {
//       for (let i = 2; i <= Math.sqrt(number); i++) {
//         if (number % i === 0) return false;
//       }
//       return true;
//     });
  
//     console.log(ArrValue);
//   };
//   primeNum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);

//////////////////////////////////////////////////////////////

//IIFE
//Return all the palindromes in an array
// let stringArr = ["appa", "array", "12321","mama", "ada", "guvi","620026"];
// let newOne = stringArr.length;

// function getPalindromic(word) {
//   let dup = word;
//   word = word.split("").reverse().join("");
//   return word == dup;
// }

// function postPalindromic(stringArr, newOne) {
//   let emptyArr = [];
//   for (let i = 0; i < newOne; i++) {
//     if (getPalindromic(stringArr[i])) {
//       emptyArr.push(stringArr[i]);
//     }
//   }
//   return emptyArr;
// }

// let word = postPalindromic(stringArr, newOne);
// if (word.length == 0) console.log("-1");
// for (let str of word) console.log(str, " ");
/////////////////////////
//ARROW
// const arr = ['carecar', 1344, 12321, 'did', 'aba'];
// const isPalindrome = el => {
//    const str = String(el);
//    let i = 0;
//    let j = str.length - 1;
//    while(i < j) {
//       if(str[i] === str[j]) {
//          i++;
//          j--;
//       }
//       else {
//          return false;
//       }
//    }
//    return true;
// };
// const findPalindrome = arr => {
//    return arr.filter(el => isPalindrome(el));
// };
// console.log(findPalindrome(arr));
/////////////////////////////////////////////////////////////////////
// Return median of two sorted arrays of the same size.

//anonymous 
// let a = [1,2,3,4];
// let b = [5,6,7,8];
// let arr = a.concat(b);
// let median;

// let c = function(){
//    let middleIndex = Math.floor(arr.length/2)
//    median = (arr[middleIndex] + arr[middleIndex - 1])/2;
//    return median;
// }

// console.log(c());

//////////////////
//iife
// (()=>{
//     let a = [1,2,3,4,3];
//     let b = [5,6,7,8,23,1];
//     let arr = a.concat(b);
//     let median;

//    let middleIndex = Math.floor(arr.length/2)
//    median = (arr[middleIndex] + arr[middleIndex - 1])/2;
//    console.log(median);
// })();

//////////////////////////////////////////////////////////////////
//Remove duplicates from an array
//anonymous
// var arr = [1,1,2,3,4,8,2,3,4,5,6,7,8,9,10];

// var a = function(arr){
//     var res =[...new Set(arr)];
//     return res;
// }
// console.log(a(arr));
/////////////////////////
//iife
// (function(arr){
//     var resulte =[...new Set(arr)];
//     console.log(resulte);
// // })
// ([1,1,2,3,4,8,2,3,4,5,6,7,8,9,10])

///////////////////////////////////////////////////////////////////

//Rotate an array by k times

//anonymous
// var rotate =  function(a,k){
//     for(var i=0; i<k; i++){
//         a.unshift(a.pop())
// }
// return a;
// }
// console.log(rotate([11, 24, 3, 44, 5, 6, 7, 8, 9],4));

//IIFE
// (function(a,k){
//     for(var i=0; i<k; i++){
//         a.unshift(a.pop())
// }
// console.log(a);
// })
// ([14, 2, 3, 4, 5, 6, 12, 4, 7, 8, 9],4);

























































































// (function ()

// {

//     console.log("hello")
// }
// )()
// var hello=function()
// {
//     console.log("hello")
// } 