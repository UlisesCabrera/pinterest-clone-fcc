require('dotenv').load();

exports.serveIndex = function(req, res, next) {
    res.render('index', { title: 'PinYours', user: JSON.stringify(req.user), message: req.flash('error') });
};