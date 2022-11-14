// import * as readline from 'node:readline';

// let a;
// let b;


// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
  
//   readline.question('Number One?', a => {
//     console.log(`Hey there ${a}!`);
//     readline.close();
//   });


const prompt = require('prompt-sync')();

const a = prompt('What is your name?');
console.log(`Hey there ${a}`);