import { Router } from "express";
import {
  getAlugueis,
  getAluguelById,
  createAluguel,
  updateAluguel,
  deleteAluguel,
} from "../controllers/aluguelController";
import { validateBody, validateParams } from "../middlewares/validation";
import { AluguelSchema, AluguelUpdateSchema } from "../schemas/validation";
import { z } from "zod";

const router = Router();
const idParamSchema = z.object({
  id: z.string().regex(/^\d+$/).transform(Number),
});

/**
 * @swagger
 * tags:
 *   name: Aluguéis
 *   description: Gerenciamento de aluguéis de filmes
 */

/**
 * @swagger
 * /alugueis:
 *   post:
 *     summary: Cria um novo aluguel
 *     tags: [Aluguéis]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Aluguel'
 *     responses:
 *       201:
 *         description: Aluguel criado com sucesso
 */
router.post("/", validateBody(AluguelSchema), createAluguel);

/**
 * @swagger
 * /alugueis:
 *   get:
 *     summary: Retorna todos os aluguéis
 *     tags: [Aluguéis]
 *     responses:
 *       200:
 *         description: Lista de aluguéis
 */
router.get("/", getAlugueis);

/**
 * @swagger
 * /alugueis/{id}:
 *   get:
 *     summary: Retorna um aluguel pelo ID
 *     tags: [Aluguéis]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do aluguel
 *     responses:
 *       200:
 *         description: Aluguel encontrado
 */
router.get("/:id", validateParams(idParamSchema), getAluguelById);

/**
 * @swagger
 * /alugueis/{id}:
 *   put:
 *     summary: Atualiza um aluguel existente
 *     tags: [Aluguéis]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do aluguel a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Aluguel'
 *     responses:
 *       200:
 *         description: Aluguel atualizado com sucesso
 */
router.put(
  "/:id",
  validateParams(idParamSchema),
  validateBody(AluguelUpdateSchema),
  updateAluguel
);

/**
 * @swagger
 * /alugueis/{id}:
 *   delete:
 *     summary: Remove um aluguel
 *     tags: [Aluguéis]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do aluguel a ser removido
 *     responses:
 *       204:
 *         description: Aluguel deletado com sucesso
 */
router.delete("/:id", validateParams(idParamSchema), deleteAluguel);

export default router;
