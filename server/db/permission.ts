import { prisma } from "."
import { IPermession } from "~~/types";


export const createPermission = async (permissionData: IPermession) => {
  return await prisma.permission?.create({
    data: permissionData
  })
}

export const getPermissionById = (id: string) => {
  if (!id) throw Error("Missing ID!")
  return prisma.permission?.findUnique({
    where: {
      id
    }
  })
}
export const getPermissions = async (params = {}) => {
  try {
    return await prisma.permission?.findMany({
      ...params
    })
  } catch (error) {
    return []

  }

}

export const deletePermissionById = (id: string) => {
  if (!id) throwError("Missing ID!")
  return prisma.permission?.delete({
    where: {
      id
    }
  })
}