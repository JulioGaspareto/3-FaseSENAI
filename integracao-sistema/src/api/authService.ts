import { api } from "./api"

interface LoginData {
  email: string
  senha: string
}

export const login = async (data: LoginData) => {
  const response = await api.post("/login", data)
  return response.data
}

export const cadastro = async (data: any) => {
  const response = await api.post("/cadastro", data)
  return response.data
}