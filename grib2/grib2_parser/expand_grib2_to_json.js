const fs = require('fs');
const path = require('path');

const SECTION_MIN_LENGTHS = {
  'SECTION_MIN_LENGTH': 4,
  'INDICATOR_MIN_LENGTH': 16,
  'IDENTIFICATION_MIN_LENGTH': 21,
  'GRID_DEF_MIN_LENGTH': 14,
  'PROD_DEF_MIN_LENGTH': 9,
  'DATA_REPR_MIN_LENGTH': 11,
  'BITMAP_MIN_LENGTH': 6,
  'DATA_MIN_LENGTH': 5,
}

function printUsage() {
  console.error("usage: node grib2_parser.js <file>");
  process.exit(1);
} 

function expand_indicator (buffer, message) {
  message = { 
        'indicator': {
          'msg_type': buffer.toString('ascii', 0, 4),
          'discipline': buffer.readUInt8(6),
          'edition': buffer.readUInt8(7),
          'msg_length': parseInt(buffer.toString('hex', 8, 16), 16),
        }
      }

  return expand_grib2_to_json(buffer.slice(16),message);
}

function expand_identification (buffer, message) {
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
    // todo: add a "remainder" field with hex-string of the rest of section
  }

  return expand_grib2_to_json(buffer.slice(message.identification.length),
                              message);
}

function expand_grid_def (buffer, message) {
  message.grid_def = {
    'length': buffer.readUInt32BE(0),
    'section': buffer.readUInt8(4),
    'source': buffer.readUInt8(5),
    'number_data_points': buffer.readUInt32BE(6),
    'opt_numList_length': buffer.readUInt8(10),
    'interp_opt_numList': buffer.readUInt8(11),
    'template_num': buffer.readUInt16BE(12),
  }

  return expand_grib2_to_json(buffer.slice(message.grid_def.length),
                              message);
}

function expand_prod_def (buffer, message) {
  message.prod_def = {
    'length': buffer.readUInt32BE(0),
    'section': buffer.readUInt8(4),
    'num_coord_values': buffer.readUInt16BE(5),
    'template_num': buffer.readUInt16BE(7),
  }

  return expand_grib2_to_json(buffer.slice(message.prod_def.length),
                              message);
}

function expand_datarepr (buffer, message) {
  message.data_repr = { 
    'length': buffer.readUInt32BE(0),
    'section': buffer.readUInt8(4),
    'num_data_points': buffer.readUInt32BE(5),
    'template_num': buffer.readUInt16BE(9),
  }

  return expand_grib2_to_json(buffer.slice(message.data_repr.length),
                              message);
}

function expand_bitmap (buffer, message) {
  message.bit_map = {
    'length': buffer.readUInt32BE(0),
    'section': buffer.readUInt8(4),
    'indicator': buffer.readUInt8(5),
  }
  message.bit_map.bitmap = buffer.toString('hex',
                                           6,
                                           message.bit_map.length);

  return expand_grib2_to_json(buffer.slice(message.bit_map.length),
                              message);
}

function expand_data (buffer, message) {
  message.data = {
    'length': buffer.readUInt32BE(0),
    'section': buffer.readUInt8(4),
    'data': buffer.slice(5).toString('base64'),
  }

  return expand_grib2_to_json(buffer.slice(message.data.length),
                              message);
}

function expand_grib2_to_json (buffer, message) {
  if (buffer.length > SECTION_MIN_LENGTHS.SECTION_MIN_LENGTH) {
    if( (buffer.toString('ascii', 0, 4)) == 'GRIB' )
      { return expand_indicator(buffer, message); }

    length = buffer.readUInt32BE(0);
    section_num = buffer.readUInt8(4);

    switch(section_num) {
        case 1: return expand_identification(buffer, message);
        case 3: return expand_grid_def(buffer, message);
        case 4: return expand_prod_def(buffer, message);
        case 5: return expand_datarepr(buffer, message);
        case 6: return expand_bitmap(buffer, message);
        case 7: return expand_data(buffer, message);
        default:
          console.error("lol I can't read wtf this is.");
          break;
      }
  }

  return JSON.stringify(message, null, ' ');
}

module.exports.expand_grib2_to_json = expand_grib2_to_json
