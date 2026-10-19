const { PDFParse } = require('pdf-parse');
const fs = require('fs');
const dataBuffer = fs.readFileSync('public/Resume Of Saiful Islam .pdf');
const parser = new PDFParse();
parser.parse(dataBuffer).then(function(data) {
  console.log(data.text);
}).catch(e => console.error(e.message));
