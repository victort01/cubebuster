import { Router } from "express";
import {
  getFilmes,
  getFilmeById,
  createFilme,
  updateFilme,
  deleteFilme,
} from "../controllers/filmeController";
import { validateBody, validateParams } from "../middlewares/validation";
import { FilmeSchema, FilmeUpdateSchema } from "../schemas/validation";
import { z } from "zod";

const router = Router();
const idParamSchema = z.object({ id: z.string().regex(/^\d+$/).transform(Number) });

/**
 * @swagger
 * tags:
 *   name: Filmes
 *   description: Gerenciamento de Filmes
 */

/**
 * @swagger
 * /filmes:
 *   post:
 *     summary: Cadastra um novo filme
 *     tags: [Filmes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Filme'
 *     responses:
 *       201:
 *         description: Filme criado
 */
router.post("/filmes", validateBody(FilmeSchema), createFilme);

/**
 * @swagger
 * /filmes:
 *   get:
 *     summary: Retorna todos os filmes
 *     tags: [Filmes]
 *     responses:
 *       200:
 *         description: Lista de filmes
 */
router.get("/filmes", getFilmes);

/**
 * @swagger
 * /filmes/{id}:
 *   get:
 *     summary: Retorna um filme pelo ID
 *     tags: [Filmes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Filme encontrado
 */
router.get("/filmes/:id", validateParams(idParamSchema), getFilmeById);

/**
 * @swagger
 * /filmes/{id}:
 *   put:
 *     summary: Atualiza um filme
 *     tags: [Filmes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Filme'
 *     responses:
 *       200:
 *         description: Filme atualizado
 */
router.put(
  "/filmes/:id",
  validateParams(idParamSchema),
  validateBody(FilmeUpdateSchema),
  updateFilme
);

/**
 * @swagger
 * /filmes/{id}:
 *   delete:
 *     summary: Remove um filme
 *     tags: [Filmes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Filme deletado
 */
router.delete("/filmes/:id", validateParams(idParamSchema), deleteFilme);

export default router;
