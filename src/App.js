import React, { useState, useEffect } from 'react'
import './global/styles.css'
import Navbar from './global/components/navbar/navbar'
import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom'
import Home from './pages/home/home'
import Projects from './pages/projects/projects'
import Stats from './pages/stats/stats'
import Writings from './pages/writings/writings'
import fetchArticles from './global/APIs/articles'
import fetchRepos from './global/APIs/repos'
import { fetchReputation, fetchTopTech } from './global/APIs/stats'
import { fetchLatest } from './global/APIs/latest'
import Footer from './global/components/footer/footer'
import Display from './global/components/display/display'

function App() {
  const [selected, setSelected] = useState('home')
  const location = useLocation()
  const navigate = useNavigate()
  const [articles, setArticles] = useState()
  const [repos, setRepos] = useState()
  const [SO_reputation, setSO_reputation] = useState()
  const [SO_topTech, setSO_topTech] = useState()
  const [latest, setLatest] = useState([])
  const [scrollOn, setScrollOn] = useState(true)
  const [msgIndex, setMsgIndex] = useState(0)
  const scrollMessages = 3

  useEffect(() => {
    /**
     * Always coordinate the menu with the current location pathname
     */
    if (selected !== location.pathname) navigate(selected)

    fetchArticles({ setArticles })
    fetchRepos({ setRepos })
    fetchReputation({ setSO_reputation })
    fetchTopTech({ setSO_topTech })
    fetchLatest({ setLatest })
  }, [])

  useEffect(() => {
    let interval = setInterval(() => {
      if (msgIndex < scrollMessages - 1) {
        setMsgIndex(msgIndex + 1)
      }
      else {
        setMsgIndex(0)
      }

      // reset isOn state
      setScrollOn(false)
      setTimeout(() => {
        setScrollOn(true)
      }, 500)
    }, 20000)

    return () => clearInterval(interval)
  })

  return (
    <div className='app-container'>

      <section id='top'>
        <Display scrollOn={scrollOn} msgIndex={msgIndex} />
        <Navbar selected={selected} setSelected={setSelected} />
      </section>

      <section id='content'>
        <Routes>
          <Route path='*' element={<Navigate to='/' />} />
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home latest={latest} />} />
          <Route path='/projects' element={<Projects repos={repos} />} />
          <Route path='/writings' element={<Writings articles={articles} />} />
          <Route path='/stats' element={<Stats SO_topTech={SO_topTech} SO_reputation={SO_reputation} />} />
        </Routes>
      </section>

      <section id='bottom'>
        <Footer />
      </section>

    </div>
  )
}

export default App
