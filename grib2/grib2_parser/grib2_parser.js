const fs = require('fs');
const path = require('path');

function printUsage() {
  console.error("usage: node grib2_parser.js <file>");
  process.exit(1);
} 

function parse_ident_sec (buffer) {
  identification = {
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
    // todo: add a "remainder" field with hex-string of the rest of section
  }
  return identification; 
}

function parse_localuse_sec (buffer) {
  local_use = {
    'length': buffer.readUInt32BE(0),
    'section': buffer.readUInt8(4),
  }
  local_use.remainder = buffer.toString('hex', 5, local_use.length);
  return local_use;
}

function parse_gridDef_sec (buffer) {
  grid_def = {
    'length': buffer.readUInt32BE(0),
    'section': buffer.readUInt8(4),
    'source': buffer.readUInt8(5),
    'number_data_points': buffer.readUInt32BE(6),
    'opt_numList_length': buffer.readUInt8(10),
    'interp_opt_numList': buffer.readUInt8(11),
    'template_num': buffer.readUInt16BE(12),
    // todo: add a "remainder" field with hex-string of the rest of section
  }
  return grid_def;
}

function parse_prodDef_sec (buffer) {
  prod_def = {
    'length': buffer.readUInt32BE(0),
    'section': buffer.readUInt8(4),
    'num_coord_values': buffer.readUInt16BE(5),
    'template_num': buffer.readUInt16BE(7),
      // todo: add a "remainder" field with hex-string of the rest of section
  }
  return prod_def;
}

function parse_datarepr_sec (buffer) {
  data_repr = { 
    'length': buffer.readUInt32BE(0),
    'section': buffer.readUInt8(4),
    'num_data_points': buffer.readUInt32BE(5),
    'template_num': buffer.readUInt16BE(9),
  }
  return data_repr;
}

function parse_bitmap_sec (buffer) {
  bit_map = {
    'length': buffer.readUInt32BE(0),
    'section': buffer.readUInt8(4),
    'indicator': buffer.readUInt8(5),
  }
  bit_map.bitmap = buffer.toString('hex', 6, bit_map.length);
  return bit_map;
}

function parse_data_sec (buffer) {
  data = {
    'length': buffer.readUInt32BE(0),
    'section': buffer.readUInt8(4),
    'data': buffer.toString('hex', 5, (buffer.length - 4))
  }
  return data;
}

function parse_grib2 (msg_buffer, message) {
  offset = 0;
  if (message != null) { offset = 16; }
  buffer = msg_buffer.slice(offset);

  while(buffer.length > 4) {
    length = buffer.readUInt32BE(0);
    section = buffer.readUInt8(4);

    switch(section) {
      case 1: 
        message.identification = parse_ident_sec(buffer.slice(0, length)); 
        break;
      // case 2: 
      //   message.local_use = parse_localuse_sec(buffer.slice(0, length));
      //   break;
      //todo: add proper handling for Local Use sections
      case 3: 
        message.grid_def = parse_gridDef_sec(buffer.slice(0, length));
        break;
      case 4:
        message.prod_def = parse_prodDef_sec(buffer.slice(0, length));
        break;
      case 5:
        message.data_repr = parse_datarepr_sec(buffer.slice(0, length));
        break;
      case 6:
        message.bit_map = parse_bitmap_sec(buffer.slice(0, length));
        break;
      case 7:
        message.data = parse_data_sec(buffer.slice(0, length));
        break;
      default:
        console.error("lol I can't read wtf this is.");
        break;
    }

    buffer = buffer.slice(length);
  }

  console.log(message);
  return message;
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
              (err, bytesRead, buffer) => { 
                if(bytesRead != message.indicator.msg_length) {
                  // console.warn(`bytes read: ${bytesRead}`);
                  throw new Error(
                    `An individual GRIB2 message was not read 
                    correctly from file.`);
                  return;
                }
                parse_grib2(buffer, message); 
              });
    }
  } 
  catch(err) { console.error(err); printUsage(); }
  finally { fs.close(fd, () => {process.exit()}); }
});

