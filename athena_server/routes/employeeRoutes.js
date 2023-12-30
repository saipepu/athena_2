const express = require('express');
const { signup, signin, userById, updateInfo, deleteAccount, getAll, signOut, getOne } = require('../controller/employeeController');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('THIS IS USER ROUTE')
})
router.get('/getAll', getAll)
router.get('/getOne/:userById', getOne);
router.post('/signup', signup)
router.post('/signin', signin)
router.get('/signout', signOut)
router.post('/updateInfo/:userById', updateInfo)
router.delete('/delete/:userById', deleteAccount)

router.param('userById', userById)
module.exports = router;