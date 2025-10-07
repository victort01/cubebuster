import prisma from "../database/prisma";

export const getAllEnderecos = async () => {
  return await prisma.endereco.findMany({
    include: { clientes: true },
  });
};

export const getEnderecoById = async (id: number) => {
  return await prisma.endereco.findUnique({
    where: { id },
    include: { clientes: true },
  });
};

export const createEndereco = async (data: any) => {
  return await prisma.endereco.create({ data });
};

export const updateEndereco = async (id: number, data: any) => {
  return await prisma.endereco.update({
    where: { id },
    data,
  });
};

export const deleteEndereco = async (id: number) => {
  return await prisma.endereco.delete({ where: { id } });
};
