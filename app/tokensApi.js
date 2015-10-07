var tokens = require('./tokensModel')();

exports.findAll = function(req, res) {
        var ok = function(doc) {
                res.json(doc);
        };
        var err = function(err) {
                res.send(404);
        };
        tokens.findAll(ok, err);
};

exports.findById = function(req, res) {
        var ok = function(doc) {
                res.json(doc);
        };
        var err = function(err) {
                res.send(404);
        };
        tokens.findById(req.params.id, ok, err);
};

exports.create = function(req, res) {
    var ok = function(doc) {
        res.location('/tokens/'+doc._id);
        res.send(201);
    };
    var err = function(err) {
        res.send(409, "Failed to create token");
    };
    tokens.create(req.body, ok, err);
}

exports.update = function(req, res) {}

exports.deleteById = function(req, res) {}