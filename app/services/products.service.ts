import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getProducts = async () => {
  return await prisma.product.findMany();
};

export const getLogos = async () => {
    return await prisma.logo.findMany();
};
