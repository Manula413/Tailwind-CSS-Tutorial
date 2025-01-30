import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function deleteAllProducts() {
  try {
    
    const currentCount = await prisma.product.count();
    console.log(`Current product count: ${currentCount}`);

    
    const deletedProducts = await prisma.product.deleteMany();
    console.log(`${deletedProducts.count} products were deleted.`);

    
    const newCount = await prisma.product.count();
    console.log(`New product count: ${newCount}`);
  } catch (error) {
    console.error('Error deleting products:', error);
  } finally {
    await prisma.$disconnect();
  }
}

deleteAllProducts();
