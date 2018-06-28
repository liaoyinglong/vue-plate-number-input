const fs = require('fs-extra');
const path = require('path');
console.log(__dirname);

fs.copyFileSync(path.resolve(__dirname, '../demo.html'), path.resolve(__dirname, '../dist/demo.html'));
