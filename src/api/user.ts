import { api } from '@/services/api'
import { type User } from '@/types/user'

export const userApi = {
  // Get all users
  getUsers: async (): Promise<User[]> => {
    const response = await api.get<User[]>('/users')
    return response.data
  },

  // Get user by ID
  getUserById: async (id: number): Promise<User> => {
    const response = await api.get<User>(`/users/${id}`)
    return response.data
  },
}
