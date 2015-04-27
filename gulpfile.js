
// Dependencies
var gulp = require ( 'gulp' );
var karma = require ( 'karma' );

// Convenience vars
//var paths = {};
//paths.rootPath = './app-server/public/';
//paths.appRootPath = paths.rootPath + '/app';
//paths.distRootPath = paths.rootPath + '/dist';
//paths.cssSrc = paths.appRootPath + '/css/**/*.css';
//paths.cssOut = paths.distRootPath + '/css';
//paths.jsSrc = paths.appRootPath + '/src/**/*.js';
//paths.jsOut = paths.distRootPath + '/src';

gulp.task ( 'unit', gulp.series ( unit ) );


function unit ( done ) {
  karma.server.start ({
    configFile: __dirname + '/app-server/public/spec/karma.conf.js',
    singleRun: false
  }, function () {
    done ();
  });
}
