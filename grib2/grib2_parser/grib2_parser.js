const fs = require('fs');
const path = require('path');
const expander = require('./expand_grib2_to_json.js')

if(process.argv.length != 3) { printUsage(); }

fs.open(path.join(__dirname, process.argv[2]), 'r', (err, fd) => {
  try {
    if(err) { throw err; }
    else {
      file_size = fs.fstatSync(fd).size;
      fs.read(fd, 
              Buffer.allocUnsafe(file_size), 
              0, 
              file_size, 
              0, 
              (err, bytesRead, buffer) => { 
                  console.log(expander.expand_grib2_to_json(buffer, {}));
                });
    }
  }
  catch(err) { console.error(err); printUsage(); }
  finally { fs.close(fd, () => {process.exit()}); }
});


