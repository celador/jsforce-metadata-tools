'use strict';

var path = require('path');
var assert = require('power-assert');
var tools = require('../lib');


describe('deploy', function () {
  var time = 240 * 1000

  this.timeout(time);

  it('should deploy from directory', function () {
    var root = '/Users/John/Github/esba/src'
    var dir = path.join(__dirname, 'fixture/pkg1')
    return tools.deployFromDirectory(root, {
      username: process.env.ESBA_DEVJNELSON_USERNAME,
      password: process.env.ESBA_DEVJNELSON_PASSWD,
      loginUrl: 'https://test.salesforce.com',
      pollTimeout: time
    })
      .then(function (res) {
        assert(res.success === true, res.errors);
        assert(res.done === true);
        assert(res.status === 'Succeeded');
        assert(res.numberComponentErrors === 0);
        assert(res.numberComponentsDeployed >= 1);
        assert(res.numberComponentsTotal >= 1);
      })
      .catch(function (err) {
        console.error(err)
      });
  });

  // it('should deploy from directory with several errors', function() {
  //   return tools.deployFromDirectory(path.join(__dirname, 'fixture/pkg2'), {
  //     username: process.env.ESBA_DEVJNELSON_USERNAME,
  //     password: process.env.ESBA_DEVJNELSON_PASSWD,
  //     loginUrl: 'https://test.salesforce.com'
  //   })
  //   .then(function(res) {
  //     assert(res.success === true);
  //     assert(res.done === true);
  //     assert(res.status === 'SucceededPartial');
  //     assert(res.numberComponentErrors === 1);
  //     assert(res.numberComponentsDeployed === 1);
  //     assert(res.numberComponentsTotal === 2);
  //   })
  //   .catch(function(err){
  //     console.err(err)
  //     assert(err.name === 'AssertionError');
  //   });
  // });


});
