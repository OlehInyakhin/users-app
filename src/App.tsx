import { Routes, Route, BrowserRouter as Router } from 'react-router-dom'
import { AppProviders } from '@/providers/app-providers'
import { Layout } from '@/components/layout/layout'
import { About } from '@/pages/about'
import { Users } from '@/pages/users'
import { UserDetail } from '@/pages/user-detail'
import { NotFound } from '@/pages/not-found'



function App() {
  return (
    <AppProviders>
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
    </AppProviders>
  )
}

export default App
