var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    url: String,
    title: String,
    source: String,
    tags: String
}, {collection: 'articlecollection'});

var Article = mongoose.model('Article', ArticleSchema);

// var article1 = new Article({url: "#", title: "test1", source: "The New York Times", tags: "funny, sunny"});
// article1.save()

module.exports = Article;
