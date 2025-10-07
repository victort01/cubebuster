import { Request, Response } from 'express';
import prisma from '../database/prisma';
import { FilmeSchema, FilmeUpdateSchema } from '../schemas/validation';

export const getFilmes = async (_req: Request, res: Response) => {
  const filmes = await prisma.filme.findMany({ include: { genero: true, alugueis: true } });
  res.json(filmes);
};

export const getFilmeById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const filme = await prisma.filme.findUnique({
    where: { id: Number(id) },
    include: { genero: true, alugueis: true },
  });
  if (!filme) return res.status(404).json({ error: 'Filme não encontrado' });
  res.json(filme);
};

export const createFilme = async (req: Request, res: Response) => {
  const validation = FilmeSchema.safeParse(req.body);
  if (!validation.success) return res.status(400).json(validation.error.format());
  const filme = await prisma.filme.create({ data: validation.data });
  res.status(201).json(filme);
};

export const updateFilme = async (req: Request, res: Response) => {
  const { id } = req.params;
  const validation = FilmeUpdateSchema.safeParse(req.body);
  if (!validation.success) return res.status(400).json(validation.error.format());
  const filme = await prisma.filme.update({ where: { id: Number(id) }, data: validation.data });
  res.json(filme);
};

export const deleteFilme = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.filme.delete({ where: { id: Number(id) } });
  res.status(204).send();
};
