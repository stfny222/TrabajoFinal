var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', {
        showTitle: true,

        // Override `foo` helper only for this rendering.
        helpers: {
            foo: function () { return 'HOLI'; }
        }
    });
});

module.exports = router;
