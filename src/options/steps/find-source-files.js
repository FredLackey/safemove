const _    = require('../../utils');
const fs   = require('fs');
const path = require('path');

const findFiles = (cache, folder) => {
  if (!_.isDirectory(folder)) { return; }
  let names = null;
  try {
    names = fs.readdirSync(folder);
  } catch (ex) {
    console.error(`Failure reading path: ${folder}`);
    return false;
  }

  const paths = [].concat(names)
    .filter(_.isValidString)
    .map(name => (path.join(folder, name)));
  
  const folders = paths.filter(_.isDirectory);
  folders.forEach(dirPath => {
    findFiles(cache, dirPath);
  });

  paths.filter(x => (x && !folders.includes(x))).forEach(x => {
    cache.paths.push(x);
  });
};

const findSourceFiles = opts => {

  _.toConsole(opts, 'Finding source files...');

  const cache = {
    paths : []
  };
  findFiles(cache, opts.source);
  
  opts._files = cache.paths.filter(_.isValidString);

  _.toConsole(opts, `  ... ${opts._files.length} found`);

  return [];
};

module.exports = findSourceFiles;
