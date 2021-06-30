import routerx from 'express-promise-router'
import peliculaController from '../controllers/PeliculaController'

const router = routerx()

router.post('/add',peliculaController.add)
router.get('/query',peliculaController.query)
router.get('/list',peliculaController.list)
router.put('/update',peliculaController.update)
router.delete('/remove',peliculaController.remove)
router.put('/activate',peliculaController.activate)
router.put('/deactivate',peliculaController.deactivate)

export default router  