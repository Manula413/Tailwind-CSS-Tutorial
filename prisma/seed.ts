import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.product.createMany({
        data: [
          {
            name: "CyberPowerPC Gamer Xtreme VR Gaming PC",
            price: "$899.99",
            description: "16GB DDR5, Intel Core i5-13400F 2.5GHz, GeForce RTX 4060 8GB, 1TB PCIe Gen4 SSD",
            image: "/images/PC/PC1_img1.jpg",
            rating: 4.4,
            reviews: 145,
            category: "PC"
          },
          {
            name: "iBUYPOWER Y60 Gaming PC Computer Desktop",
            price: "$1,899.99",
            description: "16GB DDR5 (GMA29004), AMD Ryzen 7 7800X 4.7GHz, GeForce RTX 4090 16GB",
            image: "/images/PC/PC2_img1.jpg",
            rating: 4.3,
            reviews: 720,
            category: "PC"
          },
          {
            name: "CyberPowerPC Gamer Master Gaming PC",
            price: "$1,099.99",
            description: "16GB DDR4 3200, 1TB NVMe SSD, Intel Core i5 13400F 2.5GHz, NVIDIA RTX 1060",
            image: "/images/PC/PC3_img1.jpg",
            rating: 4.5,
            reviews: 773,
            category: "PC"
          },
          {
            name: "Skytech Gaming PC Desktop",
            price: "$849.99",
            description: "32GB DDR5, Intel Core i9 14900KF 3.2GHz, GeForce RTX 4070",
            image: "/images/PC/PC4_img1.jpg",
            rating: 5,
            reviews: 722,
            category: "PC"
          },
          {
            name: "CyberPowerPC Gamer Xtreme VR Gaming PC",
            price: "$1,839.99",
            description: "Super 12GB",
            image: "/images/PC/PC5_img1.jpg",
            rating: 4.5,
            reviews: 288,
            category: "PC"
          },
          {
            name: "Gaming PC Desktop Computer Intel Core i5",
            price: "$899.99",
            description: "Intel Core i5 12400F RTX 4060 8GB Gaming Computer 32GB RAM DDR4 1TB SSD PC Desktop, ARGB Fan, Prebuilt Gaming PC Tower",
            image: "/images/PC/PC6_img1.jpg",
            rating: 4.5,
            reviews: 689,
            category: "PC"
          },
          {
            name: "NSX Tomcat GAMING PC",
            price: "$799.00",
            description: "16GB DDR4 RGB RAM 3600, AMD Ryzen 5 5500 3.6GHz, RTX 3050, 512GB NVMe SSD, 650W Bronze PSU",
            image: "/images/PC/PC7_img1.jpg",
            rating: 4,
            reviews: 47,
            category: "PC"
          },
          {
            name: "STGAubron Gaming PC Desktop",
            price: "$389.99",
            description: "Radeon RX 560 4G, Intel Core i5 (up to 3.6GHz), 16G Memory, 512G SSD, 600M WIFI, BT 5.0, RGB Fan x2, RGB Mouse Pad, Windows 10 Home",
            image: "/images/PC/PC8_img1.jpg",
            rating: 5,
            reviews: 28,
            category: "PC"
          },
          {
            name: "iBUYPOWER Slate & MESH Gaming PC",
            price: "$1,399.99",
            description: "Desktop Computer (AMD Ryzen 7 79700X CPU, AMD Radeon RX 7800XT 16GB GPU, 32GB DDR5 Non-RGB 5200MHz RAM (16x2), 1TB NVMe SSD, WIFI Ready, Windows 11 Home) SMA7R78XTO2",
            image: "/images/PC/PC9_img1.jpg",
            rating: 4.8,
            reviews: 208,
            category: "PC"
          },
          {
            name: "Skytech Shadow Gaming PC",
            price: "$1,199.99",
            description: "Intel i7 12700F 2.1GHz, RTX 4060, 1TB NVMe, 16GB DDR4 RAM 3200, Black 600W Gold PSU, WI-FI",
            image: "/images/PC/PC10_img1.jpg",
            rating: 5,
            reviews: 1905,
            category: "PC"
          }
        ],
    });

    console.log("Database seeded!");
}

main()
    .catch((e) => console.error(e))
    .finally(async () => await prisma.$disconnect());