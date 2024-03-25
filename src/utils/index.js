const copyContents   = require('./copy-contents');
const copyFile       = require('./copy-file');
const createPath     = require('./create-path');
const deleteFile     = require('./delete-file');
const getBlockDate   = require('./get-blockdate');
const getCommonPath  = require('./get-common-path');
const getDuration    = require('./get-duration');
const getFileSize    = require('./get-file-size');
const getPads        = require('./get-pads');
const getSubstring   = require('./get-substring');
const isAlpha        = require('./is-alpha');
const isAlphanumeric = require('./is-alphanumeric');
const isDigits       = require('./is-digits');
const isDirectory    = require('./is-directory');
const isFile         = require('./is-file');
const isFolder       = require('./is-folder');
const isMatch        = require('./is-match');
const isNumber       = require('./is-number');
const isSet          = require('./is-set');
const makePath       = require('./make-path');
const moveFile       = require('./move-file');
const print          = require('./print');
const readLines      = require('./read-lines');
const removePrefix   = require('./remove-prefix');
const toConsole      = require('./to-console');
const toKebabCase    = require('./to-kebab-case');
const toTable        = require('./to-table');
const trimArray      = require('./trim-array').trim;
const unique         = require('./unique');

const { isBoolean, isBooleanIfSet }         = require('./is-boolean');
const { isValidArray, isValidArrayIfSet }   = require('./is-valid-array');
const { isValidPath, isValidPathIfSet }     = require('./is-valid-path');
const { isValidString, isValidStringIfSet } = require('./is-valid-string');

module.exports = {
  copyContents,
  copyFile,
  createPath,
  deleteFile,
  getBlockDate,
  getCommonPath,
  getDuration,
  getFileSize,
  getPads,
  getSubstring,
  isAlpha,
  isAlphanumeric,
  isBoolean,
  isBooleanIfSet,
  isDigits,
  isDirectory,
  isFile,
  isFolder,
  isMatch,
  isNumber,
  isSet,
  isValidArray,
  isValidArrayIfSet,
  isValidPath,
  isValidPathIfSet,
  isValidString,
  isValidStringIfSet,
  makePath,
  moveFile,
  print,
  readLines,
  removePrefix,
  toConsole,
  toKebabCase,
  toTable,
  trimArray,
  unique
};
