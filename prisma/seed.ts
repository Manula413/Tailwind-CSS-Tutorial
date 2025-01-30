import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.product.createMany({
    data: [
      {
        name: "9-in-1 Electric Pressure Cooker 6 Qt",
        price: "$109.99",
        description:
          "Programmable Multi-Function Cooker with Safer Vent, Olla de Presion, Rice Cooker, Slow Cooker, Steamer, Sauté, Warmer & Sterilizer, 1000W, Stainless Steel",
        image: "/images/product_1.jpg",
        rating: 5,
        reviews: 150,
      },
      {
        name: "Instant Pot RIO, 7-in-1 Electric Multi-Cooker",
        price: "$99.95",
        description:
          "Pressure Cooker, Slow Cooker, Rice Cooker, Steamer, Sauté, Yogurt Maker, & Warmer, Includes App With Over 800 Recipes, 6 Quart",
        image: "/images/product_2.jpg",
        rating: 4.5,
        reviews: 150,
      },
    ],
  });

  console.log("Database seeded!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());