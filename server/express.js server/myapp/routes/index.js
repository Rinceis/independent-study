var express = require('express');
var router = express.Router();
var serveStatic = require('serve-static');
const app = express();
const port = 3000
/*var server = express();
server.configure(function(){
	server.use('/public', express.static(__dirname + '/public'));
	server.use(express.static(__dirname + '/images'));
});*/


/* GET home page. */

router.use('/public', express.static('public'));

router.get('/test', express.static('public/images'));
router.get('/info', function(req, res){ res.send('Will probably be using different URI references to test different integrations of the various third party apps. So, for example, adding /twitter to the end of the url would lead to a page with some form of twitter integration.')
})
router.get('/twitter', function(req, res){ res.send('Like this, see? Though it\'s not entirely set up yet, obviously.')
})

router.get('/index', function(req, res){
  res.send('Page showing all the various integrations I\'ve made available?')
})

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
})
module.exports = router;

