var express = require('express');
var router = express.Router();
let navlinks = [
  {loc: "#users", text: "Persons", color: "primary"}, 
  {loc: "#schools", text: "Schools", color: "primary"},
  {loc: "#events", text: "Events", color: "primary"},
  {loc: "#pets", text: "Pets", color: "primary"},
];
/* GET home page. */
router.get('/', function(req, res, next) {
//   if (req.session.level) res.redirect(`/${req.session.level}`)
//   else res.redirect('/users')
// });
// router.get('/users', (req, res) => {
//   req.session.level = "users"
  res.render('index', { title: 'Library-orpheus', navlinks: navlinks });
})

module.exports = router;
