import { useState, useEffect} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Nav from './components/Nav'
import Contact from './components/Contact'

const App = () => {
  const [enabled, setEnabled] = useState(false)

  return (
    <div className='App'>
      <Nav setEnabled={setEnabled} />
      <Contact enabled={enabled} setEnabled={setEnabled} />
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
