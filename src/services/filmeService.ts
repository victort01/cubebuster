import prisma from "../database/prisma";

export const getAllFilmes = async () => {
  return await prisma.filme.findMany({
    include: { genero: true, alugueis: true },
  });
};

export const getFilmeById = async (id: number) => {
  return await prisma.filme.findUnique({
    where: { id },
    include: { genero: true, alugueis: true },
  });
};

export const createFilme = async (data: any) => {
  return await prisma.filme.create({ data });
};

export const updateFilme = async (id: number, data: any) => {
  return await prisma.filme.update({
    where: { id },
    data,
  });
};

export const deleteFilme = async (id: number) => {
  return await prisma.filme.delete({ where: { id } });
};
