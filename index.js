'use strict';

exports.register = function (server, options, next) {

    server.route({
        path: '/',
        method: 'get',
        handler: function (request, reply) {

            return reply.file(__dirname + '/public/index.html');
        }
    });
    return next();
};

exports.register.attributes = {
    pkg: require('./package.json')
};

