process.argv.push('-l', 'unix:' + process.env.PORT, '-c', './config.yaml'); 
require('./node_modules/verdaccio/build/lib/cli.js');