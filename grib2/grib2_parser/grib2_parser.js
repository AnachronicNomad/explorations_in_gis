const fs = require('fs');
const path = require('path')

var printUsage = (() => {
  console.error("usage: node grib2_parser.js <file>");
  process.exit(1);
}); 

if(process.argv.length != 3) { printUsage(); }

fs.access(path.join(__dirname, process.argv[2]),
          fs.constants.R_OK | fs.constants.F_OK,
          (err) => {
            if(err) {
              console.error("file does not exist");
              printUsage();
            }
            else {
              console.log("Looks like I can access the file.");
            }
          })

