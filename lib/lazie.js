'use strict';

var cli = require('cli-color'),
    nomnom = require('nomnom'),
    createFile = require('./utils/createFile'),
    options = require('./utils/argOptions.js'),
    args = nomnom.script('lazie').options(options).parse();

var error = cli.red.bold,
    info = cli.cyan,
    done = cli.green;

if (Object.keys(args).length <= 1) {
  console.log(error('Sorry, put any argument in your command!'));
  console.log(nomnom.getUsage());
}
else {
  if (args.jshint) {
    createFile('.jshintrc', 'JSHint');
  }

  if (args.jsbeautify) {
    createFile('.jsbeautifyrc', 'JSBeautify');
  }

  if (args.editorconfig) {
    createFile('.editorconfig', 'EditorConfig');
  }
}
