// export this module, so that it is accessible to our application modules
module.exports = Tokens;

// Tokens constructor
function Tokens() {
    if (!(this instanceof Tokens)) {
        return new Tokens();
    }

    var mongo = require('mongodb');
    var db = require('monk')('localhost/test');
    this.Tokens = db.get('Tokens');
};

// Retrieve a list of all persisted
Tokens.prototype.findAll = function(success, error) {
    this.Tokens.find({}, {}, response(success, error));
};

// Retrieve a token by its id`
Tokens.prototype.findById = function(id, success, error) {
    this.Tokens.findById(id, response(success, error));
};

// Persist a new token document to mongodb
Tokens.prototype.create = function(token, success, error) {
    this.Tokens.insert(token, response(success, error));
};

// Update an existing token document by id in mongodb
Tokens.prototype.update = function(token, success, error) {
    this.Tokens.findAndModify(token._id, {
        $set: {
            content: token.content
        }
    }, response(success, error));
};

// Remove a token by id from the mongodb
Tokens.prototype.removeById = function(id, success, error) {
    this.Tokens.remove({
        _id: id
    }, response(success, error));
};

// Callback to the supplied success and error functions
// The caller will supply this function. The callers implementation
// will provide the necessary logic. In the case of the sample app,
// the caller's implementation will send an appropriate http response.
var response = function(success, error) {
    return function(err, doc) {
        if (err) {
            // an error occurred, call the supplied error function
            error(err);
        } else {
            // call the supplied success function
            success(doc);
        }
    };
}