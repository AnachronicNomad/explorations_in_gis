const fs = require('fs');
const path = require('path');

const printUsage = (() => {
  console.error("usage: node grib2_parser.js <file>");
  process.exit(1);
}); 

if(process.argv.length != 3) { printUsage(); }

fs.open(path.join(__dirname, process.argv[2]), 'r', (err, fd) => {
  try {
    if(err) { throw err; }
    else {
      message = {};
      fs.read(fd, Buffer.allocUnsafe(16), 0, 16, 0, 
              (err, bytesRead, buffer) => { 
          message.indicator = {
            'msg_type': buffer.toString('ascii', 0, 4),
            'discipline': buffer.readUInt8(6),
            'edition': buffer.readUInt8(7),
            'msg_length': parseInt(buffer.toString('hex', 8, 16), 16),
          };
          console.log(message);
      });
    }
  } catch(err) {
    if(err.code === 'ENOENT') { console.error("the file does not exist"); }
    else { console.error(err) }
    printUsage();
  } finally {
    fs.close(fd, () => {process.exit()});
  }
})

