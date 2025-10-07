import prisma from "../database/prisma";

export const getAllGeneros = async () => {
  return await prisma.genero.findMany({
    include: { filmes: true },
  });
};

export const getGeneroById = async (id: number) => {
  return await prisma.genero.findUnique({
    where: { id },
    include: { filmes: true },
  });
};

export const createGenero = async (data: any) => {
  return await prisma.genero.create({ data });
};

export const updateGenero = async (id: number, data: any) => {
  return await prisma.genero.update({
    where: { id },
    data,
  });
};

export const deleteGenero = async (id: number) => {
  return await prisma.genero.delete({ where: { id } });
};
