
var Datastore = require('nedb');
var db = new Datastore({
  filename: 'database.db',
  autoload: true,
});

var doc = {
  hoge: 'piyo',
  fuga: 'nyaho',
};

db.insert(doc, function(err, newDoc) {});
