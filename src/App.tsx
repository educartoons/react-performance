import { lazy, Suspense } from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import AddProductPage from './pages/AddProduct'

const HomePage = lazy(() => import('./pages/HomePage'))
const LoginPage = lazy(() => import('./pages/LoginPage'))
const ProfilePage = lazy(() => import('./pages/ProfilePage'))

const queryClient = new QueryClient()

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <BrowserRouter>
          <div>
            <nav>
              <ul className="flex gap-2">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/add-product">Add Product</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
              </ul>
            </nav>
          </div>
          <Suspense
            fallback={
              <div>
                <h2>
                  <p>Loading 😏</p>
                </h2>
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/add-product" element={<AddProductPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </div>
    </QueryClientProvider>
  )
}
