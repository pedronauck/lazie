'use strict';

var https = require('https'),
    fs = require('fs'),
    argv = require('optimist').argv,
    path = require('path'),
    createFile = require('./scripts/createFile');

if (argv.j) {
  createFile('.jshintrc', 'JSHint');
}

if (argv.e) {
  createFile('.editorconfig', 'EditorConfig');
}
