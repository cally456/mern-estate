import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import SignIn from './pages/SignIn'
import Signup from './pages/Signup'
import About from './pages/About'
import Header from './components/header'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/signin" element={<SignIn />} />
  <Route path="/signup" element={<Signup />} />
  <Route path="/about" element={<About />} />
  <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}
