const Objects = require('../models/ta03-model');

exports.getAllData = (req, res, next) => {
    Objects.fetchAll(test =>{
            res.render('pages/ta03', {
                title: 'Team Activity 03',
                path: '/ta03', // For pug, EJS
                activeTA03: true, // For HBS
                contentCSS: true, // For HBS
                objects: test
              });
        });
    }