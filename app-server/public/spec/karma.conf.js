module.exports = function ( config ) {

  var filePathPrepend = '/app-server/public/app';

  config.set({

    basePath: '',

    browsers: [ 'Chrome' ],
    //browsers: [ 'PhantomJS' ],

    exclude: [
    ],

    frameworks: [ 'jspm', 'jasmine' ],

    files: [
    ],

    jspm: {
      loadFiles: [
        //'./node_modules/phantomjs-polyfill/bind-polyfill.js',
        filePathPrepend + '/lib/mithril/mithril.min.js',
        filePathPrepend + '/src/**/*.{js,spec.js}'
      ],
      serveFiles: [
        filePathPrepend + '/index.html'
      ]
    },

    logLevel: config.LOG_DEBUG,

    port: 9876,


    preprocessors: {
      '/app-server/public/app/src/**/*.js': [ 'babel' ]
    },

    reporters: [ 'progress' ]

  });
};