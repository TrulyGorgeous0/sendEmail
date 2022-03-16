const { Router } = require('express');
const router = Router();
const {emailPostUser } = require('../controllers/emails');





router.post('/',emailPostUser);







module.exports = router;

