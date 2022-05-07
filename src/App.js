import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, About, Contact } from './pages'
import { Footer, Header } from './containers'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
