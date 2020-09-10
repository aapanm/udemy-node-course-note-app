
const fs = require('fs');

fs.writeFileSync('notes.txt', 'My name is aapan!');
const msg = 'my age is 26!';
fs.appendFileSync('notes.txt', msg);
console.log('the message " ' +msg+ '" was appended!');