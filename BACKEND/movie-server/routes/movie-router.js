const router = require('express').Router();
const MovieController = require('../controllers/movie-controller');

/**
 * GET    /find-all
 * GET    /find-by-id
 * POST   /add
 * POST   /delete
 */

router.get('/find-all', MovieController.findAll);
router.get('/find-by-id/:_id', MovieController.findById);
router.post('/add', MovieController.add);
router.post('/delete', MovieController.delete);
module.exports = router;