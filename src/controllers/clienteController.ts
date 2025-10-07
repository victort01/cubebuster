import { Request, Response } from 'express';
import prisma from '../database/prisma';
import { ClienteSchema, ClienteUpdateSchema } from '../schemas/validation';

export const getClientes = async (_req: Request, res: Response) => {
  const clientes = await prisma.cliente.findMany({ include: { endereco: true, alugueis: true } });
  res.json(clientes);
};

export const getClienteById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const cliente = await prisma.cliente.findUnique({
    where: { id: Number(id) },
    include: { endereco: true, alugueis: true },
  });
  if (!cliente) return res.status(404).json({ error: 'Cliente não encontrado' });
  res.json(cliente);
};

export const createCliente = async (req: Request, res: Response) => {
  const validation = ClienteSchema.safeParse(req.body);
  if (!validation.success) return res.status(400).json(validation.error.format());
  const cliente = await prisma.cliente.create({ data: validation.data });
  res.status(201).json(cliente);
};

export const updateCliente = async (req: Request, res: Response) => {
  const { id } = req.params;
  const validation = ClienteUpdateSchema.safeParse(req.body);
  if (!validation.success) return res.status(400).json(validation.error.format());
  const cliente = await prisma.cliente.update({ where: { id: Number(id) }, data: validation.data });
  res.json(cliente);
};

export const deleteCliente = async (req: Request, res: Response) => {
  const { id } = req.params;
  await prisma.cliente.delete({ where: { id: Number(id) } });
  res.status(204).send();
};
