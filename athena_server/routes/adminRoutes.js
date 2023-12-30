const express = require('express');
const { signup, signin, signout, updateName, adminById, deleteAccount, getAll, signOut, getOne } = require('../controller/adminController');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ success: true })
})
router.get('/getAll', getAll);
router.get('/getOne/:adminById', getOne);

router.post('/signup', signup);
router.post('/signin', signin);
router.get('/signout', signOut);
router.post('/updateName/:adminById', updateName, (req, res) => {
  return res.send('Update Successfully!')
});
router.get('/deleteAccount/:adminById', deleteAccount)
router.param('adminById', adminById);

module.exports = router;