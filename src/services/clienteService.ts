import prisma from "../database/prisma";

export const getAllClientes = async () => {
  return await prisma.cliente.findMany({
    include: {
      endereco: true,
      alugueis: true,
    },
  });
};

export const getClienteById = async (id: number) => {
  return await prisma.cliente.findUnique({
    where: { id },
    include: {
      endereco: true,
      alugueis: true,
    },
  });
};

export const createCliente = async (data: any) => {
  return await prisma.cliente.create({ data });
};

export const updateCliente = async (id: number, data: any) => {
  return await prisma.cliente.update({
    where: { id },
    data,
  });
};

export const deleteCliente = async (id: number) => {
  return await prisma.cliente.delete({ where: { id } });
};
