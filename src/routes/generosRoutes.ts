import { Router } from "express";
import {
  getGeneros,
  getGeneroById,
  createGenero,
  updateGenero,
  deleteGenero,
} from "../controllers/generoController";
import { validateBody, validateParams } from "../middlewares/validation";
import { GeneroSchema, GeneroUpdateSchema } from "../schemas/validation";
import { z } from "zod";

const router = Router();
const idParamSchema = z.object({ id: z.string().regex(/^\d+$/).transform(Number) });

/**
 * @swagger
 * tags:
 *   name: Gêneros
 *   description: Gerenciamento de Gêneros de filmes
 */

/**
 * @swagger
 * /generos:
 *   post:
 *     summary: Cria um novo gênero
 *     tags: [Gêneros]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Genero'
 *     responses:
 *       201:
 *         description: Gênero criado com sucesso
 */
router.post("/", validateBody(GeneroSchema), createGenero);

/**
 * @swagger
 * /generos:
 *   get:
 *     summary: Retorna todos os gêneros
 *     tags: [Gêneros]
 *     responses:
 *       200:
 *         description: Lista de gêneros
 */
router.get("/", getGeneros);

/**
 * @swagger
 * /generos/{id}:
 *   get:
 *     summary: Retorna um gênero pelo ID
 *     tags: [Gêneros]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Gênero encontrado
 */
router.get("/:id", validateParams(idParamSchema), getGeneroById);

/**
 * @swagger
 * /generos/{id}:
 *   put:
 *     summary: Atualiza um gênero
 *     tags: [Gêneros]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Genero'
 *     responses:
 *       200:
 *         description: Gênero atualizado com sucesso
 */
router.put(
  "/:id",
  validateParams(idParamSchema),
  validateBody(GeneroUpdateSchema),
  updateGenero
);

/**
 * @swagger
 * /generos/{id}:
 *   delete:
 *     summary: Remove um gênero
 *     tags: [Gêneros]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Gênero deletado com sucesso
 */
router.delete("/:id", validateParams(idParamSchema), deleteGenero);

export default router;
