let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('projects', {title: 'Projects', projects: req.session.projects ? null: null});
});

module.exports = router;
