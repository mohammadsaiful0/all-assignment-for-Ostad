// Require the fs module
var fs = require('fs');
// Require the http module
var http = require('http');


  const server=http.createServer(function (req,res){

    if(req.url=="/"){
      fs.exists("home.html", function(result){

        if(result){
          res.end("File Found Successfully");
          res.end(console.log("File Found Successfully"))

        }
        else{
          res.end("404 oops file not found");
          res.end(console.log("404 oops file not found"))
        }

      });
    }

  });
            

// Listen on port 3000
server.listen(3000);

// Log a message when the server is running
console.log("Server run successfully at localhost:3000");
