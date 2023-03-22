const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
 
readline.question('Nama kamu siapa?', name => {
  console.log(`Hello, ${name}!`);
  readline.close();
});
