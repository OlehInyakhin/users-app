import { useState } from 'react'
import { UserFilter } from '@/features/users/user-filter'
import { UserList } from '@/features/users/user-list'
import { useFilteredUsers } from '@/hooks/use-users'

export function Users() {
  const [searchTerm, setSearchTerm] = useState('')
  const { data: users, isLoading, error } = useFilteredUsers(searchTerm)

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Users
          </h1>
          <p className="text-muted-foreground">
            Browse and search through user profiles
          </p>
        </div>
        <UserFilter searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      </div>

      <UserList
        users={users}
        searchTerm={searchTerm}
        isLoading={isLoading}
        error={error}
      />
    </div>
  )
}
