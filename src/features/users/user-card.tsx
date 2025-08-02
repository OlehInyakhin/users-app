import { Link } from 'react-router-dom'
import { User, Mail, Phone, Globe } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { type UserCardProps } from '@/types/user'

export function UserCard({ user }: UserCardProps) {
  return (
    <Card className="h-full flex flex-col transition-shadow hover:shadow-md">
      <CardHeader className="flex-shrink-0">
        <div className="flex items-center space-x-3 overflow-hidden">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
            <User className="h-5 w-5 text-primary" />
          </div>
          <div className="min-w-0 max-w-[calc(100%-3.25rem)]">
            <CardTitle className="text-lg truncate">{user.name}</CardTitle>
            <CardDescription className="truncate">
              @{user.username}
            </CardDescription>
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex-1 space-y-3">
        <div className="space-y-2">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Mail className="h-4 w-4 flex-shrink-0" />
            <a
              href={`mailto:${user.email}`}
              className="text-inherit hover:underline truncate"
            >
              {user.email}
            </a>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Phone className="h-4 w-4 flex-shrink-0" />
            <a
              href={`tel:${user.phone}`}
              className="text-inherit hover:underline truncate"
            >
              {user.phone}
            </a>
          </div>
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Globe className="h-4 w-4 flex-shrink-0" />
            <a
              href={`https://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-inherit hover:underline truncate"
            >
              {user.website}
            </a>
          </div>
        </div>

        <div className="pt-2">
          <p className="text-sm text-muted-foreground">
            <span className="font-medium">Company:</span> {user.company.name}
          </p>
          <p className="text-sm text-muted-foreground">
            <span className="font-medium">City:</span> {user.address.city}
          </p>
        </div>
      </CardContent>

      <CardFooter className="flex-shrink-0">
        <Button asChild className="w-full">
          <Link to={`/users/${user.id}`}>View Details</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
