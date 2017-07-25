const fs = require('fs');
const path = require('path');

const printUsage = (() => {
  console.error("usage: node grib2_parser.js <file>");
  process.exit(1);
}); 

const parse_grib2 = function(fd, message) {
  var msg_buffer = Buffer.allocUnsafe(message.indicator.length);
  var dataBuffer = [ ];
  var bytesRead = fs.readSync(fd, msg_buffer, 0, message.indicator.length, 0);
  if(bytesRead == message.indicator.length) {
    throw new Error("An individual GRIB2 message was not read correctly.");
    return;
  }
  
  return [message, dataBuffer];
}

if(process.argv.length != 3) { printUsage(); }

fs.open(path.join(__dirname, process.argv[2]), 'r', (err, fd) => {
  try {
    if(err) { throw err; }
    else {
      fs.read(fd, Buffer.allocUnsafe(16), 0, 16, 0, 
        (err, bytesRead, buffer) => { 
          var message = { 
            'indicator': {
              'msg_type': buffer.toString('ascii', 0, 4),
              'discipline': buffer.readUInt8(6),
              'edition': buffer.readUInt8(7),
              'msg_length': parseInt(buffer.toString('hex', 8, 16), 16),
            }
          }
          parse_grib2(fd, message);
        });
      }
  } 
  catch(err) { console.error(err); printUsage(); }
  finally { fs.close(fd, () => {process.exit()}); }
});

