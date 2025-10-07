import { Router } from "express";
import {
  getClientes,
  getClienteById,
  createCliente,
  updateCliente,
  deleteCliente,
} from "../controllers/clienteController";
import { validateBody, validateParams } from "../middlewares/validation";
import { ClienteSchema, ClienteUpdateSchema } from "../schemas/validation";
import { z } from "zod";

const router = Router();
const idParamSchema = z.object({ id: z.string().regex(/^\d+$/).transform(Number) });

/**
 * @swagger
 * tags:
 *   name: Clientes
 *   description: Gerenciamento de Clientes
 */

/**
 * @swagger
 * /clientes:
 *   post:
 *     summary: Cria um novo cliente
 *     tags: [Clientes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cliente'
 *     responses:
 *       201:
 *         description: Cliente criado com sucesso
 */
router.post("/", validateBody(ClienteSchema), createCliente);

/**
 * @swagger
 * /clientes:
 *   get:
 *     summary: Retorna todos os clientes
 *     tags: [Clientes]
 *     responses:
 *       200:
 *         description: Lista de clientes
 */
router.get("/", getClientes);

/**
 * @swagger
 * /clientes/{id}:
 *   get:
 *     summary: Retorna um cliente pelo ID
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Cliente encontrado
 */
router.get("/:id", validateParams(idParamSchema), getClienteById);

/**
 * @swagger
 * /clientes/{id}:
 *   put:
 *     summary: Atualiza um cliente
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cliente'
 *     responses:
 *       200:
 *         description: Cliente atualizado
 */
router.put(
  "/:id",
  validateParams(idParamSchema),
  validateBody(ClienteUpdateSchema),
  updateCliente
);

/**
 * @swagger
 * /clientes/{id}:
 *   delete:
 *     summary: Remove um cliente
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Cliente deletado com sucesso
 */
router.delete("/:id", validateParams(idParamSchema), deleteCliente);

export default router;
