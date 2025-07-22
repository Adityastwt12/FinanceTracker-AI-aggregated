// prisma/seed.js
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.user.createMany({
    data: [
      {
        name: 'aditya',
        email: 'aditya@example.com',
        clerkUserId: 'clerk_aditya_001'
      },
      {
        name: 'arpit',
        email: 'arpit@example.com',
        clerkUserId: 'clerk_arpit_001'
      }
    ],
    skipDuplicates: true
  })

  console.log("✅ Users seeded successfully!")
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(() => prisma.$disconnect())
