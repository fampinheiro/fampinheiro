var Hapi = require('hapi');

var internals = {};
internals.plugins = {
    register: require(__dirname)
};

internals.start = function () {

    var start = function (server) {

        server.start(function (err) {

            if (err) {
                server.log(['error', 'start'], err);
            }

            return server.log(['start'], 'server running @ '+ server.info.uri);
        });
    };

    var server = new Hapi.Server();
    server.connection({ port: process.env.PORT || 3000 });
    server.register(internals.plugins, function (err) {

        if (err) {
            console.log(err);
        }

        return start(server);
    });
};

exports.start = internals.start;
exports.start();

