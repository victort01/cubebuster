import prisma from "../database/prisma";

export const getAllFuncionarios = async () => {
  return await prisma.funcionario.findMany({
    include: { alugueis: true },
  });
};

export const getFuncionarioById = async (id: number) => {
  return await prisma.funcionario.findUnique({
    where: { id },
    include: { alugueis: true },
  });
};

export const createFuncionario = async (data: any) => {
  return await prisma.funcionario.create({ data });
};

export const updateFuncionario = async (id: number, data: any) => {
  return await prisma.funcionario.update({
    where: { id },
    data,
  });
};

export const deleteFuncionario = async (id: number) => {
  return await prisma.funcionario.delete({ where: { id } });
};
