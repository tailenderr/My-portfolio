import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Layout from './components/Layout/index'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Skills from './components/Skills'
import Projects from './components/Projects'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="skills" element={<Skills />} />
          <Route path="work" element={<Projects />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
