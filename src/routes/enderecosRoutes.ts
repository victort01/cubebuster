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

const idParamSchema = z.object({
  id: z.string().regex(/^\d+$/).transform(Number),
});

/**
 * @swagger
 * tags:
 *   name: Endereços
 *   description: Gerenciamento de endereços de clientes
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
router.post("/", validateBody(EnderecoSchema), createEndereco);

/**
 * @swagger
 * /enderecos:
 *   get:
 *     summary: Retorna todos os endereços
 *     tags: [Endereços]
 *     responses:
 *       200:
 *         description: Lista de endereços cadastrados
 */
router.get("/", getEnderecos);

/**
 * @swagger
 * /enderecos/{id}:
 *   get:
 *     summary: Retorna um endereço pelo ID
 *     tags: [Endereços]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do endereço
 *     responses:
 *       200:
 *         description: Endereço encontrado
 */
router.get("/:id", validateParams(idParamSchema), getEnderecoById);

/**
 * @swagger
 * /enderecos/{id}:
 *   put:
 *     summary: Atualiza um endereço existente
 *     tags: [Endereços]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do endereço a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Endereco'
 *     responses:
 *       200:
 *         description: Endereço atualizado com sucesso
 */
router.put(
  "/:id",
  validateParams(idParamSchema),
  validateBody(EnderecoUpdateSchema),
  updateEndereco
);

/**
 * @swagger
 * /enderecos/{id}:
 *   delete:
 *     summary: Remove um endereço existente
 *     tags: [Endereços]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do endereço a ser removido
 *     responses:
 *       204:
 *         description: Endereço removido com sucesso
 */
router.delete("/:id", validateParams(idParamSchema), deleteEndereco);

export default router;
