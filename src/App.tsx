import { Suspense, lazy } from 'react'
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import { AppProviders } from '@/providers/app-providers'
import { Layout } from '@/components/layout/layout'
import { PageLoader } from '@/components/layout/PageLoader'

const About = lazy(() => import('@/pages/about'))
const Users = lazy(() => import('@/pages/users'))
const UserDetail = lazy(() => import('@/pages/user-detail'))
const NotFound = lazy(() => import('@/pages/not-found'))

function App() {
  return (
    <AppProviders>
      <Suspense fallback={<PageLoader />}>
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<About />} />
              <Route path="about" element={<About />} />
              <Route path="users" element={<Users />} />
              <Route path="users/:id" element={<UserDetail />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Router>
      </Suspense>
    </AppProviders>
  )
}

export default App
