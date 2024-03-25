const toConsole = (opts, message) => {
  if (!opts.console) { return; }
  console.info(message);
};

module.exports = toConsole;
