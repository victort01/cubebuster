import { Request, Response } from 'express';
import prisma from '../database/prisma';
import { AluguelSchema, AluguelUpdateSchema } from '../schemas/validation';

export const getAlugueis = async (_req: Request, res: Response) => {
  const alugueis = await prisma.aluguel.findMany({
    include: { cliente: true, filme: true, funcionario: true },
  });
  res.json(alugueis);
};

export const getAluguelById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const aluguel = await prisma.aluguel.findUnique({
    where: { id: Number(id) },
    include: { cliente: true, filme: true, funcionario: true },
  });
  if (!aluguel) return res.status(404).json({ error: 'Aluguel não encontrado' });
  res.json(aluguel);
};

export const createAluguel = async (req: Request, res: Response) => {
  const validation = AluguelSchema.safeParse(req.body);
  if (!validation.success) return res.status(400).json(validation.error.format());
  const aluguel = await prisma.aluguel.create({ data: validation.data });
  res.status(201).json(aluguel);
};

export const updateAluguel = async (req: Request, res: Response) => {
  const { id } = req.params;
  const validation = AluguelUpdateSchema.safeParse(req.body);
  if (!validation.success) return res.status(400).json(validation.error.format());
  const aluguel = await prisma.aluguel.update({ where: { id: Number(id) }, data: validation.data });
  res.json(aluguel);
};

export const deleteAluguel = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.aluguel.delete({ where: { id: Number(id) } });
  res.status(204).send();
};
