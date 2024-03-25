const cleanDirs         = require('./clean-dirs');
const findSourceFiles   = require('./find-source-files');
// const preventOverwrite  = require('./prevent-overwrite');
const setDefaults       = require('./set-defaults');
const setTargets        = require('./set-targets');
const unknowns          = require('./unknowns');
const validate          = require('./validate');
const verifyFormats     = require('./verify-formats');

module.exports = {
  cleanDirs,
  findSourceFiles,
  // preventOverwrite,
  setDefaults,
  setTargets,
  unknowns,
  validate,
  verifyFormats
};
