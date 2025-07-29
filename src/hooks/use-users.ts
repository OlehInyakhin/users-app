import { useQuery } from '@tanstack/react-query'
import { userApi } from '@/api/user'
import { type User } from '@/types/user'

// Hook for fetching all users
export function useUsers() {
  return useQuery({
    queryKey: ['users'],
    queryFn: userApi.getUsers,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  })
}

// Hook for fetching a single user by ID
export function useUser(id: number) {
  return useQuery({
    queryKey: ['user', id],
    queryFn: () => userApi.getUserById(id),
    enabled: !!id && id > 0,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  })
}

// Hook for filtering users by search term
export function useFilteredUsers(searchTerm: string) {
  const { data: users, ...query } = useUsers()

  const filteredUsers =
    users?.filter(
      (user: User) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.username.toLowerCase().includes(searchTerm.toLowerCase())
    ) || []

  return {
    ...query,
    data: filteredUsers,
  }
}
