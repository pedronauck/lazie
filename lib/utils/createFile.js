'use strict';
var fs = require('fs'),
    https = require('https'),
    sh = require('shelljs'),
    cli = require('cli-color');

var error = cli.red.bold,
    info = cli.cyan,
    done = cli.green;

module.exports = function(filename, name) {
  var options = {
    hostname: 'raw.githubusercontent.com',
    path: '/pedronauck/my-workflow/master/scripts/' + filename,
    method: 'GET',
  };

  function _createFile(data) {
    fs.writeFile('./' + filename, data, function(err) {
      if (err) {
        sh.echo(error('✖ Sorry, any problem occurred!'));
      }
      else {
        sh.echo(done('✔ Congratulations,' + name + 'was instaled!'));
      }
    });
  }

  https.get(options, function(res) {
    sh.echo(info('Loading' + name + 'file...'));
    res.on('data', _createFile);
  });
};
