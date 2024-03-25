const fs = require('fs');
const path = require('path');
const isFile = require('./is-file');
const isDirectory = require('./is-directory');

const copyFile = (sourcePath, targetPath) => {
  if (!isFile(sourcePath)) {
    return false;
  }
  const dirName = path.dirname(targetPath);
  if (!isDirectory(dirName)) {
    return false;
  }
  try {
    fs.copyFileSync(sourcePath, targetPath);
  } catch (e) {
    return false;
  }
  return true;
};

module.exports = copyFile;
