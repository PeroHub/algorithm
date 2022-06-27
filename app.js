// let roman = {
//     "I": 1,
//     "V": 2,
//     "X": 10,
//     "L" : 50,
//     "C": 100,
//     "D": 500,
//     "M" : 1000
// }




// let romanToInt = (s) => {
//     let str = s.toUpperCase()
//     let result
//     for(i = 0; i <= str.length; i++){
//         // console.log(str[i])
//         // console.log(roman[str[i]])
//         console.log(-roman[`${str[i]}`])
//         if(roman[`${str[i]}`] < roman[`${str[i]}` + 1]){
//             result = -roman[`${str[i]}`]
//             // console.log("Too big")

//         }else {
//             result = +roman[`${str[i]}`]
//             // console.log("Not big")
//         }
//     }

//     console.log(result)
// }

// romanToInt("im")

// var containsDuplicate = function(nums) {
//     return new Set(nums).size !== nums.length
// };

// console.log(containsDuplicate([,2,3,4,1]))


// const stringAna = function(s, t) {
//  if(t.length !== s.length) return false

//  const map = {}
//  for (const c of s){
//      map[c] = map[c] + 1 || 1
//  }

//  for (const c of t){
//      if(map[c]){
//          map[c]--
//      }else {
//          return false
//      }
//  }

//  return true
// }

// console.log(stringAna("mummy", "ymmum"))

// var twoSum = function(nums, target) {
//     let obj={}
//     for(let i=0;i<nums.length;i++){
//     if(obj.hasOwnProperty(target-nums[i])) return [obj[target-nums[i]], i]
//     obj[nums[i]]=i
//     }
//     }

// console.log(twoSum([2,7,11,15], 9))

// const me = () => {
//     console.log("first")
// }

// const se = () => {
//     console.log("second")
// }

// const barz = () => {
//     throw new DOMException
// }
// const myFuc =  () => {
//    me()
//    se()
//    barz()
// }

// myFuc()

// const express = require("express");

// const app = express();

// app.get('/', (req, res) => {
//     res.send("Hey")
// });


// app.listen(8080, () => console.log("Server has started") )


// const stringAna = function(strs) {
//     const n = strs.length;
//     const anagramsMap = new Map();
//     for(let i = 0; i < n; i++){
//         //sorting the array
//         const sortedStr = strs[i].split('').sort().join('');
//         console.log(sortedStr)
//         const matchingStrAnagrams = anagramsMap.get(sortedStr);
//         // console.log(matchingStrAnagrams)
//         if(matchingStrAnagrams === undefined){
//             anagramsMap.set(sortedStr, [strs[i]]);
//         } else {
//             matchingStrAnagrams.push(strs[i]);
//             anagramsMap.set(sortedStr, matchingStrAnagrams);
//         }
//     }
//     const anagramsMapEntries = anagramsMap.entries();
//     const result = [];
//     for(const [key, val] of anagramsMapEntries){
//         result.push(val);
//     }
//     // return result;
// }

// console.log(stringAna(["eat","tea","tan","ate","nat","bat"]))


// var isPalindrome = function(s) {
//    let modi =  s.replace(/[^a-zA-Z ]/g, "").toLowerCase().split('')
//    let arr = modi.join('').toString().trim()
  
//     return  s.replace(/^\s+|\s+$/gm,'')
// };

// console.log(isPalindrome("A man, a plan, a canal: Panama"))


const prompt = require('prompt-sync')({sigint: true});

let foundCorrectNumber = false
let counter = 0
let countArr = []


while (!foundCorrectNumber) {
  // Get user input
  let guess = parseInt(prompt('Enter a number: ')) ;

    counter++
    countArr.push(guess)
 
    if(counter == 10){
        console.log(`These are your initial values ${countArr}`)
       sply = countArr.splice(6).map(item => item + 7)

       console.log(`Your final result ${countArr.concat(sply)}`)
       foundCorrectNumber = true
       
   }

   
}
