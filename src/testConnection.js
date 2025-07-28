require('dotenv').config()
const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  try {
    const result = await prisma.$queryRaw`SELECT 1 AS result`
    console.log('Conexao com o banco bem-sucedida:', result)
  } catch (error) {
    console.error('Erro ao conectar com o banco:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main()
