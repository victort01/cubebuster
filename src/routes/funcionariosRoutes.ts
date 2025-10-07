import { Router } from "express";
import {
  getFuncionarios,
  getFuncionarioById,
  createFuncionario,
  updateFuncionario,
  deleteFuncionario,
} from "../controllers/funcionarioController";
import { validateBody, validateParams } from "../middlewares/validation";
import {
  FuncionarioSchema,
  FuncionarioUpdateSchema,
} from "../schemas/validation";
import { z } from "zod";

const router = Router();

const idParamSchema = z.object({
  id: z.string().regex(/^\d+$/).transform(Number),
});

/**
 * @swagger
 * tags:
 *   name: Funcionários
 *   description: Gerenciamento de Funcionários
 */

/**
 * @swagger
 * /funcionarios:
 *   post:
 *     summary: Cria um novo funcionário
 *     tags: [Funcionários]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Funcionario'
 *     responses:
 *       201:
 *         description: Funcionário criado com sucesso
 */
router.post("/funcionarios", validateBody(FuncionarioSchema), createFuncionario);

/**
 * @swagger
 * /funcionarios:
 *   get:
 *     summary: Retorna todos os funcionários
 *     tags: [Funcionários]
 *     responses:
 *       200:
 *         description: Lista de funcionários
 */
router.get("/funcionarios", getFuncionarios);

/**
 * @swagger
 * /funcionarios/{id}:
 *   get:
 *     summary: Retorna um funcionário pelo ID
 *     tags: [Funcionários]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Funcionário encontrado
 */
router.get("/funcionarios/:id", validateParams(idParamSchema), getFuncionarioById);

/**
 * @swagger
 * /funcionarios/{id}:
 *   put:
 *     summary: Atualiza um funcionário existente
 *     tags: [Funcionários]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Funcionario'
 *     responses:
 *       200:
 *         description: Funcionário atualizado com sucesso
 */
router.put(
  "/funcionarios/:id",
  validateParams(idParamSchema),
  validateBody(FuncionarioUpdateSchema),
  updateFuncionario
);

/**
 * @swagger
 * /funcionarios/{id}:
 *   delete:
 *     summary: Remove um funcionário
 *     tags: [Funcionários]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Funcionário deletado com sucesso
 */
router.delete("/funcionarios/:id", validateParams(idParamSchema), deleteFuncionario);

export default router;
