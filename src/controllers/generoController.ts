import { Request, Response } from 'express';
import prisma from '../database/prisma';
import { GeneroSchema, GeneroUpdateSchema } from '../schemas/validation';

export const getGeneros = async (_req: Request, res: Response) => {
  const generos = await prisma.genero.findMany({ include: { filmes: true } });
  res.json(generos);
};

export const getGeneroById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const genero = await prisma.genero.findUnique({
    where: { id: Number(id) },
    include: { filmes: true },
  });
  if (!genero) return res.status(404).json({ error: 'Gênero não encontrado' });
  res.json(genero);
};

export const createGenero = async (req: Request, res: Response) => {
  const validation = GeneroSchema.safeParse(req.body);
  if (!validation.success) return res.status(400).json(validation.error.format());
  const genero = await prisma.genero.create({ data: validation.data });
  res.status(201).json(genero);
};

export const updateGenero = async (req: Request, res: Response) => {
  const { id } = req.params;
  const validation = GeneroUpdateSchema.safeParse(req.body);
  if (!validation.success) return res.status(400).json(validation.error.format());
  const genero = await prisma.genero.update({ where: { id: Number(id) }, data: validation.data });
  res.json(genero);
};

export const deleteGenero = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.genero.delete({ where: { id: Number(id) } });
  res.status(204).send();
};
