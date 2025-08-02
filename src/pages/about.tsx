export default function About() {
  return (
    <div className="space-y-6">
      <div className="text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
          Welcome to Users App
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          A modern React application for managing and viewing user information
        </p>
      </div>

      <div className="mx-auto max-w-2xl">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-foreground">
            About This Application
          </h2>
          <p className="text-muted-foreground">
            This is a single-page application built with React 19, TypeScript,
            and modern web technologies. It demonstrates best practices for
            building responsive, accessible, and performant web applications.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-6">
            Features
          </h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Browse and search through user profiles</li>
            <li>View detailed user information</li>
            <li>Responsive design for all screen sizes</li>
            <li>Dark and light theme support</li>
            <li>Fast and efficient data loading</li>
            <li>Accessible user interface</li>
          </ul>

          <h3 className="text-xl font-semibold text-foreground mt-6">
            Technology Stack
          </h3>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>React 19 with TypeScript</li>
            <li>Vite for fast development and building</li>
            <li>Tailwind CSS v4 for styling</li>
            <li>shadcn/ui for UI components</li>
            <li>React Router for navigation</li>
            <li>TanStack Query for data management</li>
            <li>JSONPlaceholder API for demo data</li>
          </ul>

          <div className="mt-8 p-6 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
