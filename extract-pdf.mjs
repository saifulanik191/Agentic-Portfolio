import pdf from 'pdf-parse/lib/pdf-parse.js';
import { readFileSync } from 'fs';

const dataBuffer = readFileSync('public/Resume Of Saiful Islam .pdf');
const data = await pdf(dataBuffer);
console.log(data.text);
