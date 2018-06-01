
var Datastore = require('nedb');
var db = new Datastore({
  filename: 'db/database.db',
  autoload: true,
});

var doc = {
  hoge: 'piyo',
  fuga: 'nyaho',
};

db.insert(doc, function(err, newDoc) {});
