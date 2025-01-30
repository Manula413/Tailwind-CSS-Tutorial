import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.logo.createMany({
        data: [
            { url: 'logo_1.png' },
            { url: 'logo_2.png' },
            { url: 'logo_3.png' },
            { url: 'logo_4.png' },
            { url: 'logo_5.png' }
        ],
    });

    console.log("Database seeded!");
}

main()
    .catch((e) => console.error(e))
    .finally(async () => await prisma.$disconnect());