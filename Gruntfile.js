module.exports = function(grunt) {
  var fs = require('fs');
  var async = require('async');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });

  grunt.registerTask('json', 'Generate info.json', function() {
    var done = this.async();
    fs.readdir(__dirname + '/flags', function(err, files){
      var result = {};
      if(files[0] === ".DS_Store") files.splice(0, 1);
      result.count = files.length;
      result.files = files;
      async.map(files, function(name, callback){
        name = name.replace('.png', '');
        name = name.replace(/-(\d)/, ' $1');
        name = name.charAt(0).toUpperCase() + name.slice(1);
        callback(null, name);
      }, function(err, names){
        result.names = names;
        fs.writeFile('info.json', JSON.stringify(result, null, 4), function(err) {
          grunt.log.ok();
          done();
        });
      });
    });
  });

  // Default task(s).
  grunt.registerTask('default', ['json']);
};
