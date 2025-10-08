var http = require("http"); 
const port = 8000; 

http.createServer(function(req, res) { 
  console.log(req);
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My Page</title>
    </head>
    <body>
      <h1>Welcome to My Page</h1>
      <h2>About Me</h2>
      <p>Hello! My name is Emma. I’m studying Creative Computing at Goldsmiths, University of London.</p>
      <h2>Interests</h2>
      <p>I love creating art and technology projects that explore imagination and absurd realism. I enjoy sleeping, coding and drawing.</p>
      <p>I am learning how to make games, and will publish my independent game on ichi!<p>
      <h2>Contact</h2>
      <p>You can reach me at: <a href="yfang003@gold.ac.uk">yfang003@gold.ac.uk</a></p>
    </body>
    </html>`

);
    }).listen(port, function() { 
        console.log(`Node server is running on port ${port}...`); 
}); 