var Lab = require('lab');
var Hapi = require('hapi');
var Code = require('code');
var expect = Code.expect;

var lab = exports.lab = Lab.script();

var suite = {};
lab.beforeEach(function (done) {

    suite.server = new Hapi.Server();
    suite.server.connection({ port: 1337 });
    return suite.server.register(require('../'), done);
});

lab.test('server root returns an html page', function (done) {

    suite.server.inject('/', function (response) {

        expect(response.statusCode).to.equal(200);
        expect(response.headers['content-type']).to.include('text/html');
        return done();
    });
});

