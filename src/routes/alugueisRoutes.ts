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
const idParamSchema = z.object({ id: z.string().regex(/^\d+$/).transform(Number) });

/**
 * @swagger
 * tags:
 *   name: Aluguéis
 *   description: Gerenciamento de Aluguéis de filmes
 */

/**
 * @swagger
 * /aluguéis:
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
router.post("/aluguéis", validateBody(AluguelSchema), createAluguel);

/**
 * @swagger
 * /aluguéis:
 *   get:
 *     summary: Retorna todos os aluguéis
 *     tags: [Aluguéis]
 *     responses:
 *       200:
 *         description: Lista de aluguéis
 */
router.get("/aluguéis", getAlugueis);

/**
 * @swagger
 * /aluguéis/{id}:
 *   get:
 *     summary: Retorna um aluguel pelo ID
 *     tags: [Aluguéis]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Aluguel encontrado
 */
router.get("/aluguéis/:id", validateParams(idParamSchema), getAluguelById);

/**
 * @swagger
 * /aluguéis/{id}:
 *   put:
 *     summary: Atualiza um aluguel existente
 *     tags: [Aluguéis]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Aluguel'
 *     responses:
 *       200:
 *         description: Aluguel atualizado
 */
router.put(
  "/aluguéis/:id",
  validateParams(idParamSchema),
  validateBody(AluguelUpdateSchema),
  updateAluguel
);

/**
 * @swagger
 * /aluguéis/{id}:
 *   delete:
 *     summary: Remove um aluguel
 *     tags: [Aluguéis]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Aluguel deletado com sucesso
 */
router.delete("/aluguéis/:id", validateParams(idParamSchema), deleteAluguel);

export default router;
