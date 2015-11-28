var express = require('express');
var router = express.Router();

var videoController = require('../controllers/videos_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Lista De Reproduccion'});

});


/*Get Videos page */
router.get('/videos', videoController.index);
router.get('/videos/1', videoController.index1);
router.get('/videos/2', videoController.index2);
router.get('/videosrock', videoController.indexrock);
router.get('/videosrock/1', videoController.indexrock1);
router.get('/videosrock/2', videoController.indexrock2);

module.exports = router;
