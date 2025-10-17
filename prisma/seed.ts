import { PrismaClient } from '@prisma/client'
import productList from '../components/Showcase/productList'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting seed...')

  // Clean existing data
  await prisma.ingredient.deleteMany()
  await prisma.product.deleteMany()

  // Seed products
  for (const product of productList) {
    await prisma.product.create({
      data: {
        id: product.id,
        title: product.title,
        image: product.image,
        price: product.price,
        type: product.type,
        order: product.order,
        ingredients: {
          create: product.ingredientList.map(ingredient => ({
            name: ingredient.name,
            quantity: ingredient.quantity,
          })),
        },
      },
    })
  }

  console.log(`✅ Seeded ${productList.length} products`)
}

main()
  .catch((e) => {
    console.error('❌ Seed failed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })