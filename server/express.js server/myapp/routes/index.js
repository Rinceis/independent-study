var express = require('express');
var router = express.Router();
var serveStatic = require('serve-static');
const {request} = require("express");
const app = express();
const port = 3000
/*var server = express();
server.configure(function(){
	server.use('/public', express.static(__dirname + '/public'));
	server.use(express.static(__dirname + '/images'));
});*/


/* GET home page. */

router.use('/public', express.static('public'));

// router.get('/test', express.static('public/images'));
router.get('/info', function(req, res){ res.send('I\'ll probably be using different URI references to test different integrations of the various third party apps. So, for example, adding /twitter to the end of the url would lead to a page with some form of twitter integration. By the way, did you notice this page looks a bit different? This response was sent directly as a response, rather than being rendered as one of the various routes. ')
})
router.get('/twitter', function(req, res){ res.send('Like this, see? Though it\'s not entirely set up yet, obviously. I wonder if it\'s possible to somehow send the twitter feed directly, rather than through pug? Just embedding the feed doesn\'t apparently require the api, so that wouldn\'t be a great demonstration of me learning new skills.')
})

router.get('/index', function(req, res, next){
  res.send('Page showing all the various integrations I\'ve made available?')
  res.render( 'index', {title:'index'});
})

router.get('/', function(req, res, next) {
  res.render('index', {title:'Express'});
})
router.get('/login', function(req, res, next) {
  res.render('index', {title:'LoggedIn'});
})
module.exports = router;

