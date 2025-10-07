import { Router } from "express";
import {
  getEnderecos,
  getEnderecoById,
  createEndereco,
  updateEndereco,
  deleteEndereco,
} from "../controllers/enderecoController";
import { validateBody, validateParams } from "../middlewares/validation";
import { EnderecoSchema, EnderecoUpdateSchema } from "../schemas/validation";
import { z } from "zod";

const router = Router();
const idParamSchema = z.object({ id: z.string().regex(/^\d+$/).transform(Number) });

/**
 * @swagger
 * tags:
 *   name: Endereços
 *   description: Gerenciamento de Endereços
 */

/**
 * @swagger
 * /enderecos:
 *   post:
 *     summary: Cria um novo endereço
 *     tags: [Endereços]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Endereco'
 *     responses:
 *       201:
 *         description: Endereço criado com sucesso
 */
router.post("/enderecos", validateBody(EnderecoSchema), createEndereco);

/**
 * @swagger
 * /enderecos:
 *   get:
 *     summary: Retorna todos os endereços
 *     tags: [Endereços]
 *     responses:
 *       200:
 *         description: Lista de endereços
 */
router.get("/enderecos", getEnderecos);

/**
 * @swagger
 * /enderecos/{id}:
 *   get:
 *     summary: Retorna um endereço pelo ID
 *     tags: [Endereços]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Endereço encontrado
 */
router.get("/enderecos/:id", validateParams(idParamSchema), getEnderecoById);

/**
 * @swagger
 * /enderecos/{id}:
 *   put:
 *     summary: Atualiza um endereço existente
 *     tags: [Endereços]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Endereco'
 *     responses:
 *       200:
 *         description: Endereço atualizado com sucesso
 */
router.put(
  "/enderecos/:id",
  validateParams(idParamSchema),
  validateBody(EnderecoUpdateSchema),
  updateEndereco
);

/**
 * @swagger
 * /enderecos/{id}:
 *   delete:
 *     summary: Remove um endereço
 *     tags: [Endereços]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Endereço deletado com sucesso
 */
router.delete("/enderecos/:id", validateParams(idParamSchema), deleteEndereco);

export default router;
