import prisma from "@repo/db/client"

export const getUserById = async (id: number) => {
  return prisma.user.findUnique({ where: { id } })
}

export const createUser = async (data) => {
  return prisma.user.create({ data })
}

export const updateUser = async (id, data) => {
  return prisma.user.update({ where: { id }, data })
}

export const deleteUser = async (id) => {
  return prisma.user.delete({ where: { id } })
}
