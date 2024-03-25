const os = require('os');
const _ = require('../utils');

module.exports = {

  source      : { type: 'string', isPath: true, name: 'Source Directory' },
  target      : { type: 'string', isPath: true, name: 'Desination Directory' },
  // backup      : { type: 'string', isPath: true, name: 'Backup Directory' },

  nooverwrite   : { type: 'boolean', default: false, name: 'Overwrite existing target files' },

  console     : { type: 'boolean', default: false, name: 'Log activity to console' },

  limit       : { type: 'number', default: -1, name: 'Number of files to process' }

};
