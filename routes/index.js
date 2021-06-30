import routerx from 'express-promise-router'

import generoRouter from './genero'
import peliculaRouter from './pelicula'
import usuarioRouter from './usuario'

const router = routerx()

router.use('/genero', generoRouter)
router.use('/pelicula', peliculaRouter)
router.use('/usuario', usuarioRouter)

export default router
