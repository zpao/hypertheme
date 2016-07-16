const fs = require('fs');
const os = require('os');
const path = require('path');
const vm = require('vm')

let curThemeName;
let curTheme;

let pathToThemes = path.resolve(os.homedir(), '.hyperterm_themes');

function loadTheme(name) {
  // TODO handle invalid theme
  const str = fs.readFileSync(path.join(pathToThemes, name) + '.js');
  const script = new vm.Script(str);
  const module = {};
  script.runInNewContext({ module });
  if (!module.exports) {
    throw new Error('Error reading theme: `module.exports` not set');
  }
  // TODO: validate theme
  return module.exports;
}

exports.middleware = (store) => (next) => (action) => {
  switch (action.type) {
    case 'CONFIG_LOAD':
    case 'CONFIG_RELOAD':
      if (action.config.theme) {
        const theme = loadTheme(action.config.theme);
        Object.assign(
          action.config,
          theme
        );
      }
  }
  next(action);
};
