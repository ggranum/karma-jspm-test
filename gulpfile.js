
// Dependencies
var gulp = require ( 'gulp' );
var karma = require ( 'karma' );

// Gulp 4.0 syntax
//gulp.task ( 'unit', gulp.series ( unit ) );

// Gulp 3.x syntax
gulp.task ( 'unit',  unit );


function unit ( done ) {
  karma.server.start ({
    configFile: __dirname + '/app-server/public/spec/karma.conf.js',
    singleRun: false
  }, function () {
    done ();
  });
}
