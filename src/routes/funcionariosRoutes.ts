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
 *   description: Gerenciamento de funcionários da locadora
 */

/**
 * @swagger
 * /funcionarios:
 *   post:
 *     summary: Cadastra um novo funcionário
 *     tags: [Funcionários]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Funcionario'
 *           example:
 *             nome: "João Silva"
 *             email: "joao.silva@cubebuster.com"
 *             senha: "senhaSegura123"
 *             cargo: "Atendente"
 *             telefone: "11999999999"
 *     responses:
 *       201:
 *         description: Funcionário criado com sucesso
 */
router.post("/", validateBody(FuncionarioSchema), createFuncionario);

/**
 * @swagger
 * /funcionarios:
 *   get:
 *     summary: Retorna todos os funcionários cadastrados
 *     tags: [Funcionários]
 *     responses:
 *       200:
 *         description: Lista de funcionários
 */
router.get("/", getFuncionarios);

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
 *         description: ID do funcionário
 *     responses:
 *       200:
 *         description: Funcionário encontrado
 */
router.get("/:id", validateParams(idParamSchema), getFuncionarioById);

/**
 * @swagger
 * /funcionarios/{id}:
 *   put:
 *     summary: Atualiza os dados de um funcionário existente
 *     tags: [Funcionários]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do funcionário a ser atualizado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Funcionario'
 *           example:
 *             nome: "João Pedro Silva"
 *             email: "joao.pedro@cubebuster.com"
 *             senha: "novaSenha123"
 *             cargo: "Gerente"
 *             telefone: "11888888888"
 *     responses:
 *       200:
 *         description: Funcionário atualizado com sucesso
 */
router.put(
  "/:id",
  validateParams(idParamSchema),
  validateBody(FuncionarioUpdateSchema),
  updateFuncionario
);

/**
 * @swagger
 * /funcionarios/{id}:
 *   delete:
 *     summary: Remove um funcionário existente
 *     tags: [Funcionários]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID do funcionário a ser removido
 *     responses:
 *       204:
 *         description: Funcionário deletado com sucesso
 */
router.delete("/:id", validateParams(idParamSchema), deleteFuncionario);

export default router;
