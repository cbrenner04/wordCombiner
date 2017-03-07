var express = require('express');

var app = express();
var port = process.env.PORT || 3000;

// Serve static content for the app from the 'public' directory in the
// application directory.
app.use(express.static(__dirname + '/public'));

app.listen(port, function() {
    console.log('listening on ' + port);
});

// get them routes
require('./controllers/combiner_controller.js')(app);
