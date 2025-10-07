import { Request, Response } from 'express';
import prisma from '../database/prisma';
import { EnderecoSchema, EnderecoUpdateSchema } from '../schemas/validation';

export const getEnderecos = async (_req: Request, res: Response) => {
  const enderecos = await prisma.endereco.findMany({ include: { clientes: true } });
  res.json(enderecos);
};

export const getEnderecoById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const endereco = await prisma.endereco.findUnique({
    where: { id: Number(id) },
    include: { clientes: true },
  });
  if (!endereco) return res.status(404).json({ error: 'Endereço não encontrado' });
  res.json(endereco);
};

export const createEndereco = async (req: Request, res: Response) => {
  const validation = EnderecoSchema.safeParse(req.body);
  if (!validation.success) return res.status(400).json(validation.error.format());
  const endereco = await prisma.endereco.create({ data: validation.data });
  res.status(201).json(endereco);
};

export const updateEndereco = async (req: Request, res: Response) => {
  const { id } = req.params;
  const validation = EnderecoUpdateSchema.safeParse(req.body);
  if (!validation.success) return res.status(400).json(validation.error.format());
  const endereco = await prisma.endereco.update({ where: { id: Number(id) }, data: validation.data });
  res.json(endereco);
};

export const deleteEndereco = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.endereco.delete({ where: { id: Number(id) } });
  res.status(204).send();
};
