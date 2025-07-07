import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import GitHub, { githubInfoLoader } from './components/GitHub/GitHub'
import User from './components/User/user'

{/* 
  If <Layout /> contains an <Outlet /> component from React Router, the child routes will be rendered inside the <Outlet /> inside <Layout />.

  <Layout /> is always rendered because it's the parent route.
  <Outlet /> acts as a placeholder, rendering the matched child route inside it.

  When a child route is matched, its corresponding component will be rendered inside the <Outlet /> of the parent component.

  Each child component (Home, About, Contact, GitHub) is displayed inside <Layout /> dynamically based on the URL.
*/}

// Method to create Browser Routes

// Method 1 ----

// const router = createBrowserRouter([
//   {
//     path: '/', element: <Layout />, // Parent Component
//     children: [
//       { path: "", element: <Home /> }, // Default Route
//       { path:"about", element: <About /> },
//       { path:"contact", element: <Contact /> },
//       { path:"github", element: <GitHub /> }
//     ]
//   }
// ])

// Method 2 ----

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/user/:id" element={<User />} />
      <Route 
      loader={githubInfoLoader}
      path="/github" element={<GitHub />} />
      {/* <Route path="/user" element={<User />} /> */}
    </Route>
  )
)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
