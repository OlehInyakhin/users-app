import { UserCard } from './user-card'
import { Skeleton } from '@/components/ui/skeleton'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { type UserListProps } from '@/types/user'

// Skeleton component for loading state
function UserCardSkeleton() {
  return (
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-center space-x-3">
          <Skeleton className="h-10 w-10 rounded-full" />
          <div className="flex-1 space-y-2">
            <Skeleton className="h-5 w-32" />
            <Skeleton className="h-4 w-24" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-2/3" />
        </div>
        <div className="space-y-2">
          <Skeleton className="h-4 w-1/2" />
          <Skeleton className="h-4 w-1/3" />
        </div>
      </CardContent>
      <CardFooter>
        <Skeleton className="h-10 w-full" />
      </CardFooter>
    </Card>
  )
}

interface UserListWithLoadingProps extends UserListProps {
  isLoading?: boolean
  error?: Error | null
}

export function UserList({
  users,
  searchTerm,
  isLoading,
  error,
}: UserListWithLoadingProps) {
  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-destructive text-lg font-medium">
          Error loading users
        </p>
        <p className="text-muted-foreground mt-2">{error.message}</p>
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <UserCardSkeleton key={index} />
        ))}
      </div>
    )
  }

  if (users.length === 0 && searchTerm) {
    return (
      <div className="text-center py-12">
        <p className="text-lg font-medium text-muted-foreground">
          No users found for "{searchTerm}"
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          Try searching with a different term
        </p>
      </div>
    )
  }

  if (users.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg font-medium text-muted-foreground">
          No users available
        </p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  )
}
