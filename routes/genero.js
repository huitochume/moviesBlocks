import routerx from 'express-promise-router'
import generoController from '../controllers/GeneroController'

const router = routerx()

router.post('/add',generoController.add)
router.get('/query',generoController.query)
router.get('/list',generoController.list)
router.put('/update',generoController.update)
router.delete('/remove',generoController.remove)
router.put('/activate',generoController.activate)
router.put('/deactivate',generoController.deactivate)

export default router  