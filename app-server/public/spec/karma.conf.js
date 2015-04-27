module.exports = function ( config ) {

  var filePathPrepend = '/app-server/public/app';

  config.set({

    basePath: '',

    browsers: [ 'Chrome' ],
    //browsers: [ 'PhantomJS' ],

    //browserDisconnectTimeout: 10 * 1000, // 10s
    //browserDisconnectTolerance: 2,
    //browserNoActivityTimeout: 2 * 60 * 1000, // 2m
    //captureTimeout: 0,

    //babelPreprocessor: {
    //  options: {
    //    sourceMap: 'inline',
    //    compact: false
    //  },
    //  sourceFileName: function(file) {
    //    return file.originalPath;
    //  }
    //},

    exclude: [
    ],

    frameworks: [ 'jspm', 'jasmine' ],

    files: [
    ],

    //jspm: {
    //  loadFiles: [
    //    filePathPrepend + '/lib/mithril/mithril.min.js',
    //    filePathPrepend + '/src/**/*.spec.js'
    //  ],
    //  serveFiles: [
    //    filePathPrepend + '/**/src/**/*.js',
    //    filePathPrepend + '/index.html'
    //  ]
    //},

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

    proxies: {
      '/jspm_packages/': '/base/jspm_packages/'
    },

    //proxies: {
    //  '/': 'http://localhost:8086/'
    //},

    //proxies: {
    //  'jspm_packages/': filePathPrepend + '/base/www/jspm_packages/'
    //},

    reporters: [ 'progress' ]

  });
};