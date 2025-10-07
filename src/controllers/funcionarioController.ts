import { Request, Response } from 'express';
import prisma from '../database/prisma';
import { FuncionarioSchema, FuncionarioUpdateSchema } from '../schemas/validation';

export const getFuncionarios = async (_req: Request, res: Response) => {
  const funcionarios = await prisma.funcionario.findMany();
  res.json(funcionarios);
};

export const getFuncionarioById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const funcionario = await prisma.funcionario.findUnique({ where: { id: Number(id) } });
  if (!funcionario) return res.status(404).json({ error: 'Funcionário não encontrado' });
  res.json(funcionario);
};

export const createFuncionario = async (req: Request, res: Response) => {
  const validation = FuncionarioSchema.safeParse(req.body);
  if (!validation.success) return res.status(400).json(validation.error.format());
  const funcionario = await prisma.funcionario.create({ data: validation.data });
  res.status(201).json(funcionario);
};

export const updateFuncionario = async (req: Request, res: Response) => {
  const { id } = req.params;
  const validation = FuncionarioUpdateSchema.safeParse(req.body);
  if (!validation.success) return res.status(400).json(validation.error.format());
  const funcionario = await prisma.funcionario.update({ where: { id: Number(id) }, data: validation.data });
  res.json(funcionario);
};

export const deleteFuncionario = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.funcionario.delete({ where: { id: Number(id) } });
  res.status(204).send();
};
