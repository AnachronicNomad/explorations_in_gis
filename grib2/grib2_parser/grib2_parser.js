const fs = require('fs');
const path = require('path');
const util = require('util');

const printUsage = (() => {
  console.error("usage: node grib2_parser.js <file>");
  process.exit(1);
}); 

if(process.argv.length != 3) { printUsage(); }

fs.open(path.join(__dirname, process.argv[2]), 'r', (err, fd) => {
  try {
    if(err) { throw err; }
    else {
      fs.fstat(fd, (err, stats) => {
        console.log(util.inspect(stats));
      })
    }
  } catch(err) {
    if(err.code === 'ENOENT') { console.error("the file does not exist"); }
    else { console.error(err) }
    printUsage();
  } finally {
    fs.close(fd, () => {process.exit()});
  }
})

