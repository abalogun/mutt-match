const router = require('express').Router(),
      usersRouter = require('./users'),
      sheltersRouter = require('./shelters'),     
      dogsRouter = require('./dogs'),     
      matchesRouter = require('./matches'),
      imagesRouter = require('./images'),
      dbxRouter = require('./dbx');  

router.use('/users/:id/matches', matchesRouter);
router.use('/users', usersRouter);
router.use('/dogs/:id/images', imagesRouter);
router.use('/dogs', dogsRouter);
router.use('/shelters', sheltersRouter);
router.use('/dropbox', dbxRouter);

 module.exports = router;