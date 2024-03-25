const _ = require('../../utils');

const preventOverwrite = opts => {

  if (opts._files.length < 1 || opts.nooverwrite === false) { 
    return []; 
  }

  const errors = [];

  const exists = opts._files.filter(x => (x && x.target && _.isFile(x.target)));
  if (exists.length === 1) {
    errors.push(`Target file exists but overwrite has been prevented: ${exists[0].target}`);
  }
  if (exists.length > 1) {
    errors.push(`Multiple target files exists but overwrite has been prevented (${exists.length} failed).`);
  }
  
  return errors;
};

module.exports = preventOverwrite;
