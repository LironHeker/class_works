'use strict';
// let name = 'Mary ' // string methods task 1
// let activity = 'drink tea'
// let bio = 'Our guest ' + name + activity + '.'
// console.log(bio.length)// מדפיס את מספר התווים כולל הרווחים ללא הגרשיים וללא הפלוסים =25 תווים



// const str = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
// let num=prompt("enter a number") //קלט
// console.log(`char# ${num} is: ${str[num]}`)//task 2 - מציג את התו לפי המספר שהמשתמש הכניס 


// const str=prompt("enter a string")//task3
// console.log(`last char is: ${str.charAt(str.length - 1)}.`)
// console.log(`before last char  is: ${str.charAt(str.length - 2)}.`)


// const str = 'abcde'//task4
// let strReverse = ''
// for(let i =str.length - 1; i>=0; i--){
//     strReverse += str.charAt(i);
// }
// console.log(strReverse);//מדפיס את התווים הפוך


// const str='js'//task 5 המרת אותיות
// console.log(str.toUpperCase())


// const str = 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.'
// let string=prompt('enter a string')
// console.log(str.includes(string))//task 6 


// let str= '1-2-3-4-5'//task 7
// console.log(str.replaceAll('-','.'))


// let str='1-2-3-4-5'//task 8
// console.log(str.replaceAll('-','.'))

// const str = 'sdfwe'//task 9
// console.log(str.substring(4,2) )// כי התוכנה מזהה ש4 גדול מ-2 ומחליפה בינהם-fw -הפלט הוא 

// const str = "I'm learning javascript!";//task 10 
// console.log(str.slice(4,12))
// console.log(str.slice(-11,-1))
// console.log(str.substring(4,12))
// console.log(str.substring(13,23))
// console.log(str.substr(4,8))
// console.log(str.substr(-11,10))


//  const str = 'http://www.notion.so/String-820cf1e906884d8fb9c02236fe1c6dcb/'//task11
//  console.log(str.indexOf("http://" === 0)? 'yes': 'no')


// const str = 'https://www.notion.html'//task 12
// console.log(str.indexOf(".html") === str.length -5? 'yes': 'no')

// const str = 'ab cd cd cd ef'//task 13
// console.log(str.lastIndexOf('cd'))//9
// console.log(str.lastIndexOf('cd',8))//6

// const str = 'abcde'//task 14
// console.log(str.startsWith('abc'))//true
// console.log(str.startsWith('xxx'))//false
// console.log(str.startsWith('bc',1))//true

// const str = 'abcde'//task 15
// console.log(str.endsWith('cde'))//true
// console.log(str.endsWith('xxx'))//false
// console.log(str.endsWith('bc',3))//true

// let str = 'ab-cd-ef'//task 16
// console.log(str.split('-'))//['ab''cd''ef']
// console.log(str.split('-',2))//['ab','cd']
// console.log(str.split(''))//['a','b','-','c','d','-','e','f']
// console.log(str.split('',3))//['a','b','-']
// let str2 = '12345'
// console.log(str2.split(''))//['1','2','3','4','5']