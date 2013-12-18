(function (urls){
var http = require('http');

var counter = 0;
var results = Array(urls.length).join(".").split(".");

urls.forEach(function(url, index){

  http.get(url, function(response){
    response.setEncoding('utf8');
    response.on('error', console.error);
    response.on('data', function(data){
      results[index] += data;
    });
    response.on('end', function(){
      counter ++;
      if(counter === 3){
        results.forEach(function(text){
          console.log(text);
        });
      }
    });
  });

});
})(process.argv.slice(2));
