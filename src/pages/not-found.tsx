import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Home, Users } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-6xl font-bold text-muted-foreground">404</h1>
          <h2 className="text-2xl font-semibold text-foreground">
            Page Not Found
          </h2>
          <p className="text-muted-foreground max-w-md">
            Sorry, we couldn't find the page you're looking for. The page might
            have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link to="/about">
              <Home className="mr-2 h-4 w-4" />
              Go to About
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link to="/users">
              <Users className="mr-2 h-4 w-4" />
              View Users
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
