import prisma from "../database/prisma";

export const getAllAlugueis = async () => {
  return await prisma.aluguel.findMany({
    include: {
      cliente: true,
      filme: true,
      funcionario: true,
    },
  });
};

export const getAluguelById = async (id: number) => {
  return await prisma.aluguel.findUnique({
    where: { id },
    include: {
      cliente: true,
      filme: true,
      funcionario: true,
    },
  });
};

export const createAluguel = async (data: any) => {
  return await prisma.aluguel.create({ data });
};

export const updateAluguel = async (id: number, data: any) => {
  return await prisma.aluguel.update({
    where: { id },
    data,
  });
};

export const deleteAluguel = async (id: number) => {
  return await prisma.aluguel.delete({ where: { id } });
};
