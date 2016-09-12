'use strict';

var path = require('path');
var assert = require('power-assert');
var tools = require('../lib');

describe('retrieve', function () {

  this.timeout(90 * 1000);

  // it('should retrieve by package names', function () {
  //   return tools.retrieveByPackageNames(['JSforceRetrievePackage1', 'JSforceRetrievePackage2'], {
  //     username: process.env.ESBA_DEVJNELSON_USERNAME,
  //     password: process.env.ESBA_DEVJNELSON_PASSWD,
  //     loginUrl: 'https://test.salesforce.com'
  //   })
  //     .then(function (res) {
  //       assert(res.status === 'Succeeded');
  //       assert(res.fileProperties.length > 0);
  //       assert(typeof res.zipFile === 'string');

  //     })
  //     .catch(function (err) {
  //       console.error(err)
  //     });
  // });

  // it('should retrieve by types', function () {
  //   return tools.retrieveByTypes('ApexClass:*;ApexTrigger:*;ApexPage', {
  //     username: process.env.ESBA_DEVJNELSON_USERNAME,
  //     password: process.env.ESBA_DEVJNELSON_PASSWD,
  //     loginUrl: 'https://test.salesforce.com'
  //   })
  //     .then(function (res) {
  //       assert(res.status === 'Succeeded');
  //       assert(res.fileProperties.length > 0);
  //       assert(typeof res.zipFile === 'string');

  //     })
  //     .catch(function (err) {
  //       console.error(err)
  //     });
  // });

  // it('should retrieve by package.xml', function () {
  //   return tools.retrieveByPackageXML(path.join(__dirname, 'fixture/pkg1/package.xml'), {
  //     username: process.env.ESBA_DEVJNELSON_USERNAME,
  //     password: process.env.ESBA_DEVJNELSON_PASSWD,
  //     loginUrl: 'https://test.salesforce.com'
  //   })
  //     .then(function (res) {
  //       assert(res.status === 'Succeeded');
  //       assert(res.fileProperties.length > 0);
  //       assert(typeof res.zipFile === 'string');

  //     })
  //     .catch(function (err) {
  //       console.error(err)
  //     });
  // });

});
