import { useParams, Link, Navigate } from 'react-router-dom'
import {
  ArrowLeft,
  User,
  Mail,
  Phone,
  Globe,
  MapPin,
  Building,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { useUser } from '@/hooks/use-users'

// Skeleton for loading state
function UserDetailSkeleton() {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Skeleton className="h-10 w-20" />
        <Skeleton className="h-8 w-48" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-32" />
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-2/3" />
            <Skeleton className="h-4 w-1/2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Skeleton className="h-6 w-24" />
          </CardHeader>
          <CardContent className="space-y-4">
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-2/3" />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export function UserDetail() {
  const { id } = useParams<{ id: string }>()
  const userId = id ? parseInt(id, 10) : 0

  const { data: user, isLoading, error } = useUser(userId)

  // Redirect to 404 if invalid ID
  if (!id || isNaN(userId) || userId <= 0) {
    return <Navigate to="/404" replace />
  }

  if (isLoading) {
    return <UserDetailSkeleton />
  }

  if (error) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" asChild>
            <Link to="/users">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Users
            </Link>
          </Button>
        </div>

        <div className="text-center py-12">
          <p className="text-destructive text-lg font-medium">
            Error loading user
          </p>
          <p className="text-muted-foreground mt-2">
            {error?.message ?? 'User not found'}
          </p>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" asChild>
            <Link to="/users">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Users
            </Link>
          </Button>
        </div>

        <div className="text-center py-12">
          <p className="text-lg font-medium text-muted-foreground">
            User not found
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="sm" asChild>
          <Link to="/users">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Users
          </Link>
        </Button>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
        {user.name}
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Personal Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="h-5 w-5" />
              Personal Information
            </CardTitle>
            <CardDescription>
              Basic user details and contact information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Full Name
                </p>
                <p className="text-base">{user.name}</p>
              </div>

              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Username
                </p>
                <p className="text-base">@{user.username}</p>
              </div>

              <div className="flex gap-2">
                <Mail className="h-4 w-4 mt-1 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Email
                  </p>
                  <a
                    href={`mailto:${user.email}`}
                    className="text-base text-primary hover:underline"
                  >
                    {user.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-2">
                <Phone className="h-4 w-4 mt-1 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Phone
                  </p>
                  <a
                    href={`tel:${user.phone}`}
                    className="text-base text-primary hover:underline"
                  >
                    {user.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-2">
                <Globe className="h-4 w-4 mt-1 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">
                    Website
                  </p>
                  <a
                    href={`https://${user.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base text-primary hover:underline"
                  >
                    {user.website}
                  </a>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Address Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              Address
            </CardTitle>
            <CardDescription>Location and address details</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Street Address
                </p>
                <p className="text-base">
                  {user.address.street}, {user.address.suite}
                </p>
              </div>

              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  City
                </p>
                <p className="text-base">{user.address.city}</p>
              </div>

              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Zip Code
                </p>
                <p className="text-base">{user.address.zipcode}</p>
              </div>

              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Coordinates
                </p>
                <p className="text-base text-muted-foreground">
                  Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Company Information */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Building className="h-5 w-5" />
              Company
            </CardTitle>
            <CardDescription>
              Professional and company information
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Company Name
                </p>
                <p className="text-base font-medium">{user.company.name}</p>
              </div>

              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Catch Phrase
                </p>
                <p className="text-base italic">"{user.company.catchPhrase}"</p>
              </div>

              <div>
                <p className="text-sm font-medium text-muted-foreground">
                  Business
                </p>
                <p className="text-base">{user.company.bs}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
