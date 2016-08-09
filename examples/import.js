'use strict';
import * as fs from fs;

let text = fs.readFileSync('../index.html', {encoding: 'utf-8'});
console.log(text);
