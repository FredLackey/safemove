const _     = require('../utils');
const path  = require('path');

const formatLongString = (longString) => {

  // Remove any non-digit characters from the string
  const digitsOnly = `${longString}`.replace(/\D/g, '');
  
  // Split the string into groups of three digits from the right
  const groups = [];
  let i = digitsOnly.length;
  while (i > 0) {
      groups.unshift(digitsOnly.substring(Math.max(0, i - 3), i));
      i -= 3;
  }
  
  // Join the groups with commas
  const formattedString = groups.join(',');
  
  return formattedString;
};

const processFiles = (opts) => {

  const processStart = new Date();  

  let limitReached = false;
  if (!_.isNumber(opts.count)) { 
    opts.count = 0;
  }
  if (!_.isNumber(opts.errorLimit)) {
    opts.errorLimit = -1;
  }
  if (!_.isNumber(opts.errorCount)) {
    opts.errorCount = 0;
  }

  opts._files.forEach(file => {
    
    if (opts.limit > 0 && opts.count >= opts.limit) {
      if (!limitReached) { 
        _.toConsole(opts, `File limit reached ${opts.limit}.  Stopping...`);
        limitReached = true;
      }
      return;
    }

    if (opts.console === true) {
      console.clear();
    }

    const formattedErrors = opts.errorCount > 0 ? ` (${formatLongString(opts.errorCount)} errors)` : '';
    const formattedCount = `${(opts.count + 1)}`.padStart(`${opts._files.length}`.length, '0');
    _.toConsole(opts, `${formattedCount}-${opts._files.length} : ${file.source.replace(opts.source, '')}`);
    _.toConsole(opts, `- elasped : ${_.getDuration(processStart, new Date())}${formattedErrors}`);

    const sizeTimeBegin = new Date();
    
    let sizeTimeEnd = new Date();
    const targetSize = _.getFileSize(file.target);
    sizeTimeEnd = new Date();
    if (sizeTimeEnd - sizeTimeBegin > 1000) {
      _.toConsole(opts, `- target size time : ${_.getDuration(sizeTimeBegin, sizeTimeEnd)} ... skipping!`);
      opts.errCount += 1;
      return;
    }

    const sourceSize = (targetSize >= 0 || opts.console !== false) ? _.getFileSize(file.source) : -1;
    sizeTimeEnd = new Date();
    if (sizeTimeEnd - sizeTimeBegin > 1000) {
      _.toConsole(opts, `- source size time : ${_.getDuration(sizeTimeBegin, sizeTimeEnd)} ... skipping!`);
      opts.errCount += 1;
      return;
    }


    if (targetSize >= 0 && sourceSize === targetSize) {

      if (!_.deleteFile(file.source)) {
        file.error = 'Existing source file not removed.';
        _.toConsole(opts, `- ${file.error}`);
        opts.errorCount += 1;
      } else {
        opts.count += 1;
        _.toConsole(opts, '- pruned');
        return;
      }

    }

    if (targetSize >= 0 && sourceSize !== targetSize && !opts.nooverwrite) {

      if (!_.deleteFile(file.target)) {
        file.error = 'Existing target file not removed.';
        _.toConsole(opts, `- ${file.error}`);
        opts.errorCount += 1;
        return;
      }

      _.toConsole(opts, '- cleaned');
    }
  
    opts.count += 1;
    file.start = new Date();
    _.toConsole(opts, `- started at ${file.start.toLocaleString()} (bytes: ${formatLongString(sourceSize)})`);

    if (!_.isFile(file.source)) {
      file.error = 'not found.';
      _.toConsole(opts, `- ${file.error}`);
      return;
    }

    if (!_.createPath(path.dirname(file.target))) {
      file.error = 'directory create failed';
      _.toConsole(opts, `- ${file.error}`);
      opts.errorCount += 1;
      return;      
    }

    if (!_.copyFile(file.source, file.target)) {
      file.error = 'File not copied.';
      _.toConsole(opts, `- ${file.error}`);
      opts.errorCount += 1;
      return;
    }

    const newSize = _.getFileSize(file.target);
    if (newSize !== sourceSize) {
      file.error = 'File not copied correctly.';
      _.toConsole(opts, `- ${file.error}`);
      opts.errorCount += 1;
      return;
    }

    if (!_.deleteFile(file.source)) {
      file.error = 'Original not removed.';
      _.toConsole(opts, `- ${file.error}`);
      opts.errorCount += 1;
      return;
    }

    file.moved = new Date();

    _.toConsole(opts, `- moved ${file.moved.toLocaleString()}`);
    _.toConsole(opts, `- time  ${_.getDuration(file.start, file.moved)}`);
  });
  
  const errCount = opts._files.filter(x => (x && x.source && x.error)).length;
  if (errCount > 0) {
    return [`Failed files: ${errCount}`];
  }
  
  return [];
};

module.exports = processFiles;
