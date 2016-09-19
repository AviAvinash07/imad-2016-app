var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    "article-one": {
  title: "Article One I Avinash.",
  heading: "Article One",
  date: "Sep 19 2016",
  content:`<p>
                This is the content for my First Article.This is the content for my First Article.This is the content for my First Article.This is the content for my First Article.This is the content for my First Article.This is the content for my First Article.This is the content for my First Article.This is the content for my First Article.
                </p>
                <p>
                This is the content for my First Article.This is the content for my First Article.This is the content for my First Article.This is the content for my First Article.This is the content for my First Article.This is the content for my First Article.This is the content for my First Article.This is the content for my First Article.
                </p>
                <p>
                This is the content for my First Article.This is the content for my First Article.This is the content for my First Article.This is the content for my First Article.This is the content for my First Article.This is the content for my First Article.This is the content for my First Article.This is the content for my First Article.
                </p>`
},
    "articel-two": {
    title: "Article Two I Avinash.",
  heading: "Article Two",
  date: "Sep 20 2016",
  content:`<p>
                This is the content for my Second Article.
                </p>`
},
    "article-three": {
    title: "Article three I Avinash.",
  heading: "Article three",
  date: "Sep 21 2016",
  content:`<p>
                This is the content for my Third Article.
                </p>`
        }
};

function createTemplate (data) {
    
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;

var htmlTemplate = 
    `<html>
    <head>
        <title>
            ${title}
        </title>
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    
    <body>
        <div class="container">
             <div>
             <a href="/">Home</a>
             </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
               ${content}
            </div>
        </div>
    </body>
</html>`;
    return htmlTemplate;
    }

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get("/;articleName", function(req, res){
    // articleName = article-one
    // articles[articleName] == {} content object for article one
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get("/article-two", function(req, res){
    res.send("Article two requested and will be served here");
});

app.get("/article-three", function(req, res){
    res.send("Article three requested and will be served here");
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
