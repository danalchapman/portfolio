import { useState, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Home } from '../Home/Home'
import { Story } from '../Story/Story'
import { Projects } from '../Projects/Projects'
import { Connection } from '../Connection/Connection'

import { projectData } from '../../projectData'

import './App.css';

export const App = () => {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    setProjects(projectData)
  }, [])

  return (
    <main className='main-container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/story' element={<Story />} />
        <Route path='/projects' element={<Projects projects={ projects } />} />
        <Route path='/connection' element={<Connection />} />
      </Routes>
    </main>
  );
}

