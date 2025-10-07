import { Router } from 'express';
import alugueisRoutes from './alugueisRoutes';
import clientesRoutes from './clientesRoutes';
import enderecosRoutes from './enderecosRoutes';
import filmesRoutes from './filmesRoutes';
import funcionariosRoutes from './funcionariosRoutes';
import generosRoutes from './generosRoutes';

const router = Router();



router.use('/alugueis', alugueisRoutes);
router.use('/clientes', clientesRoutes);
router.use('/enderecos', enderecosRoutes);
router.use('/filmes', filmesRoutes);
router.use('/funcionarios', funcionariosRoutes);
router.use('/generos', generosRoutes);

export default router;
