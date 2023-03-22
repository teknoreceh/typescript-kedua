var readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question('Nama kamu siapa?', function (name) {
    console.log("Hello, ".concat(name, "!"));
    readline.close();
});
