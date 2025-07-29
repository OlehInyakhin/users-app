# USERS APP - React + TypeScript + Vite

A modern web application for viewing and managing user information. The application demonstrates best practices for development using React 19, TypeScript, Tailwind CSS, and other modern technologies.

## Features

- ⚡️ **Vite** - Fast build tool and dev server
- ⚛️ **React 19** - Latest React with TypeScript support
- 🎨 **Tailwind CSS v4** - Modern utility-first CSS framework
- 🧩 **shadcn/ui** - Beautiful and accessible UI components
- 🔍 **ESLint** - Code linting with unused imports/variables detection
- 🌙 **Dark/Light Theme** - Theme switching support
- 📱 **Responsive Design** - Mobile-first approach

## ESLint Configuration

This project includes a comprehensive ESLint setup that automatically detects and helps remove:

- ❌ Unused variables
- ❌ Unused imports
- ❌ Unreachable code
- ✅ TypeScript best practices

## Setup and Installation

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation Steps

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/users-app.git
   cd users-app
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Create a `.env` file in the project root with the following content:
   ```
   VITE_API_BASE_URL=https://jsonplaceholder.typicode.com
   ```

### Available Scripts

```bash
# Check for linting errors
npm run lint

# Automatically fix linting errors (including unused imports)
npm run lint:fix

# Start development server
npm run dev

# Build for production
npm run build

# Preview the production build locally
npm run preview
```

### ESLint Rules Included

- `@typescript-eslint/no-unused-vars` - Detects unused variables
- `unused-imports/no-unused-imports` - Removes unused imports automatically
- `unused-imports/no-unused-vars` - Enhanced unused variable detection
- `@typescript-eslint/no-explicit-any` - Prevents usage of `any` type
- `no-var` - Enforces `let`/`const` over `var`

## Environment Variables

The application uses environment variables for configuration. Create an `.env` file in the project root with the following variables:

```bash
# API Configuration
VITE_API_BASE_URL=https://jsonplaceholder.typicode.com
```

### Available Environment Variables

| Variable | Description | Default Value |
|------------|----------|----------------------|
| `VITE_API_BASE_URL` | Base API URL | https://jsonplaceholder.typicode.com |

## API and Data Structure

The application uses JSONPlaceholder API to retrieve user data.

### Endpoints

| Endpoint | Method | Description | Parameters |
|----------|-------|----------|----------|
| `/users` | GET | Get a list of all users | - |
| `/users/:id` | GET | Get a user by ID | `id`: User ID |

### API Response Structure

```typescript
interface User {
  id: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}
```

### API Usage Example

```typescript
// Get all users
const users = await userApi.getUsers();

// Get user by ID
const user = await userApi.getUserById(1);
```

## Project Structure

```
├── public/               # Static assets
│   └── favicon.svg       # Site favicon
├── src/                  # Source code
│   ├── api/              # API integration
│   │   └── user.ts       # User API endpoints
│   ├── assets/           # Project assets
│   │   └── logo.svg      # Application logo
│   ├── components/       # Reusable components
│   │   ├── layout/       # Layout components
│   │   ├── mode-toggle.tsx # Theme toggle component
│   │   └── ui/           # UI components from shadcn/ui
│   ├── features/         # Feature-specific components
│   │   └── users/        # User-related features
│   ├── hooks/            # Custom React hooks
│   │   └── use-users.ts  # Hook for user data
│   ├── lib/              # Utility functions
│   │   └── utils.ts      # Common utilities
│   ├── pages/            # Application pages
│   │   ├── about.tsx     # About page
│   │   ├── not-found.tsx # 404 page
│   │   ├── user-detail.tsx # User details page
│   │   └── users.tsx     # Users list page
│   ├── providers/        # React context providers
│   │   ├── app-providers.tsx # Application providers wrapper
│   │   └── theme-provider.tsx # Theme provider
│   ├── services/         # Service layer
│   │   └── api.ts        # API service
│   ├── types/            # TypeScript type definitions
│   │   └── user.ts       # User-related types
│   ├── App.tsx           # Main application component
│   ├── index.css         # Global styles
│   ├── main.tsx          # Application entry point
│   └── vite-env.d.ts     # Vite environment types
├── .env                  # Environment variables
├── components.json       # shadcn/ui components config
├── eslint.config.js      # ESLint configuration
├── package.json          # Project dependencies
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
```

## Application Features

- **Responsive Design**: Works on mobile, tablet, and desktop devices
- **Dark/Light Theme**: Toggle between dark and light modes
- **User Management**: View and filter users
- **User Details**: View detailed information about each user
- **Error Handling**: Proper error states for API failures
- **Loading States**: Visual feedback during data loading
