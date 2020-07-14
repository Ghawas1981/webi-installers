#!/usr/bin/env node

'use strict';

//var pkg = require('../package.json');
var os = require('os');
//var request = require('@root/request');
//var promisify = require('util').promisify;
//var exec = promisify(require('child_process').exec);
var exec = require('child_process').exec;

if (/^win/i.test(os.platform())) {
  console.warn('');
  console.warn("This npm installer doesn't work on windows yet.");
  console.warn('Copy and paste this into cmd.exe or PowerShell instead:');
  console.warn('');
  console.warn(
    "    curl.exe -fsSA 'MS' https://webinstall.dev/webi | powershell"
  );
  console.warn('');
  return;
}

exec('curl -fsS https://webinstall.dev/webi | bash', function (
  err,
  stdout,
  stderr
) {
  if (err) {
    console.error(err);
  }
  if (stdout) {
    console.info(stdout);
  }
  if (stderr) {
    console.error(stderr);
  }
});
/*
  .then(function () {
    // nada
  })
  .catch(function (err) {
    console.error(err);
  });
*/
