const fs = require('fs');
const path = require('path');

const printUsage = (() => {
  console.error("usage: node grib2_parser.js <file>");
  process.exit(1);
}); 

const parse_grib2 = function(msg_buffer, message) {
  // if(bytesRead != message.indicator.length) {
  //   console.warn(`bytes read: ${bytesRead}`);
  //   throw new Error("GRIB2 message was not read correctly from file.");
  //   return;
  // }

  // identification_header = { 'offset': 16, 'length': null };
  // localuse_header = { 'offset': null, 'length': null };
  // griddefn_header = { 'offset': null, 'length': null };
  // proddefn_header = { 'offset': null, 'length': null };
  // datarepr_header = { 'offset': null, 'length': null };
  // bitmap_header = { 'offset': null, 'length': null };
  // data_header = { 'offset': null, 'length': null };

  offset = 16;
  buffer = msg_buffer.slice(offset);
  console.log(buffer);
  message.identification = {
    'length': buffer.readUInt32BE(0),
    'section': buffer.readUInt8(4),
    'centre_id': buffer.readUInt16BE(5),
    'subCenter_id': buffer.readUInt16BE(7),
    'master_tables_version': buffer.readUInt8(9),
    'local_tables_version': buffer.readUInt8(10),
    'sig_ref_time': buffer.readUInt8(11),
    'time': {
      'year': buffer.readUInt16BE(12),
      'month': buffer.readUInt8(14),
      'day': buffer.readUInt8(15),
      'hour': buffer.readUInt8(16),
      'minute': buffer.readUInt8(17),
      'second': buffer.readUInt8(18),
    },
    'production_status': buffer.readUInt8(19),
    'processed_type': buffer.readUInt8(20),
  }
  offset += message.identification.length;

  console.log(message);
  return;
}

if(process.argv.length != 3) { printUsage(); }

fs.open(path.join(__dirname, process.argv[2]), 'r', (err, fd) => {
  try {
    if(err) { throw err; }
    else {
      buffer = Buffer.allocUnsafe(16);
      fs.readSync(fd, buffer, 0, 16, 0);
      
      //todo: add error handling for if this is not actually a GRIB2 message

      message = { 
        'indicator': {
          'msg_type': buffer.toString('ascii', 0, 4),
          'discipline': buffer.readUInt8(6),
          'edition': buffer.readUInt8(7),
          'msg_length': parseInt(buffer.toString('hex', 8, 16), 16),
        }
      }

      msg_buffer = Buffer.alloc(message.indicator.msg_length);
      fs.read(fd, msg_buffer, 0, message.indicator.msg_length, 0, 
              (err, bytesRead, buffer) => { parse_grib2(buffer, message); });
    }
  } 
  catch(err) { console.error(err); printUsage(); }
  finally { fs.close(fd, () => {process.exit()}); }
});

