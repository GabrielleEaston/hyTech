const { Router } = require('express')
const controllers = require('../controllers')
const restrict = require('../helpers')

const router = Router()

router.get('/', (req, res) => res.send('This is the api root!'))

router.post('/sign-up', controllers.signUp)
router.post('/sign-in', controllers.signIn)
router.get('/verify', controllers.verifyUser)
router.post('/change-password', controllers.changePassword)

router.get('/Posts', controllers.getPosts)
router.get('/Posts/:id', controllers.getPost)
router.post('/Posts', restrict, controllers.createPost)
router.put('/Posts/:id', restrict, controllers.updatePost)
router.delete('/Posts/:id', restrict, controllers.deletePost)

module.exports = router