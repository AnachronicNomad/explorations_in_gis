const fs = require('fs');
const path = require('path');
const Parser = require('binary-parser').Parser;

const printUsage = (() => {
  console.error("usage: node grib2_parser.js <file>");
  process.exit(1);
}); 

const indicator_header = new Parser()
  .string('msg_tag', {
    encoding: 'ascii',
    length: 4,
  })
  .array('padding', {
    type: 'uint8',
    length: 2,
  })
  .uint8('discipline')
  .uint8('grib_edition')
  .string('msg_length', {
    encoding: 'hex',
    length: 8,
  });

if(process.argv.length != 3) { printUsage(); }

fs.open(path.join(__dirname, process.argv[2]), 'r', (err, fd) => {
  try {
    if(err) { throw err; }
    else {
      fs.read(fd, Buffer.allocUnsafe(16), 0, 16, 0, 
              (err, bytesRead, buffer) => { 
                console.log(indicator_header.parse(buffer))
                // console.log(buffer);
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

