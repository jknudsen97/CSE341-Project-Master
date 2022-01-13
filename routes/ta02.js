//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();
const users = [{
  username: 'alpha'
},
{
  username: 'beta'
},
{
  username: 'charlie'
}]

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    path: '/ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    userList: users, 
  });
});

router.post('/addUser', (req, res, next) => {
  users.push({
    username: req.body.username
  });
  res.redirect('/ta02');
});

/*router.post('/removeUser', (req, res, next) => {
  let uIndex = users.findIndex(() => {
    return req.body.username
  });
  users.splice(uIndex, 1);
  res.redirect('/ta02');
});*/

router.post('/removeUser', (req, res, next) => {
  let uIndex = users.map((e) => {return e.userName}).indexOf(req.body.userName);
  if (uIndex != -1){
    users.splice(uIndex, 1)
  };
  res.redirect('/ta02');
});

exports.routes = router;
exports.users = users;
