const fs = require('fs');
const path = require('path');

const printUsage = (() => {
  console.error("usage: node grib2_parser.js <file>");
  process.exit(1);
}); 

const parse_grib2 = function(fd, message) {
  msg_buffer = Buffer.allocUnsafe(message.indicator.msg_length);
  var dataBuffer = [ ];
  var bytesRead = fs.readSync(fd, msg_buffer, 0, message.indicator.length, 0);
  if(bytesRead == message.indicator.length) {
    throw new Error("GRIB2 message was not read correctly from file.");
    return;
  }

  identification_header = { 'offset': 16, 'length': null };
  localuse_header = { 'offset': null, 'length': null };
  griddefn_header = { 'offset': null, 'length': null };
  proddefn_header = { 'offset': null, 'length': null };
  datarepr_header = { 'offset': null, 'length': null };
  bitmap_header = { 'offset': null, 'length': null };
  data_header = { 'offset': null, 'length': null };

  var offset = 0;
  message.identification = {
    'length': msg_buffer.readUInt32BE((offset=identification_header.offset)),
    'section': msg_buffer.readUInt8((offset += 4)),
    'centre_id': msg_buffer.readUInt16BE((++offset)),
    'subcenter_id': msg_buffer.readUInt16BE((offset += 2)),
    'master_tables_version': msg_buffer.readUInt8((offset += 2)),
    'local_tables_version': msg_buffer.readUInt8((++offset)),
    'sig_ref_time': msg_buffer.readUInt8((++offset)),
    'time': {
      'year': msg_buffer.readUInt16BE((++offset)),
      'month': msg_buffer.readUInt8((offset += 2)),
      'day': msg_buffer.readUInt8((++offset)),
      'hour': msg_buffer.readUInt8((++offset)),
      'minute': msg_buffer.readUInt8((++offset)),
      'second': msg_buffer.readUInt8((++offset)),
    },
    'production_status': msg_buffer.readUInt8((++offset)),
    'processed_type': msg_buffer.readUInt8((++offset)),
  }

  console.log(message);
  return [message, dataBuffer];
}

if(process.argv.length != 3) { printUsage(); }

fs.open(path.join(__dirname, process.argv[2]), 'r', (err, fd) => {
  try {
    if(err) { throw err; }
    else {
      buffer = Buffer.allocUnsafe(16);
      fs.readSync(fd, buffer, 0, 16, 0);
      
      //todo: add error handling for if this is not actually a GRIB2 message

      var message = { 
        'indicator': {
          'msg_type': buffer.toString('ascii', 0, 4),
          'discipline': buffer.readUInt8(6),
          'edition': buffer.readUInt8(7),
          'msg_length': parseInt(buffer.toString('hex', 8, 16), 16),
        }
      }

      parse_grib2(fd, message);
    }
  } 
  catch(err) { console.error(err); printUsage(); }
  finally { fs.close(fd, () => {process.exit()}); }
});

