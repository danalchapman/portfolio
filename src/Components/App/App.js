import { useState, useEffect } from 'react'
import { Nav } from '../Nav/Nav'
import { Home } from '../Home/Home'
import { About } from '../About/About'
import { Projects } from '../Projects/Projects'
import { Connect } from '../Connect/Connect'
// import { FindMe } from '../FindMe/FindMe'
import { projectData } from '../../projectData'
import './App.css';

export const App = () => {

  const [projects, setProjects] = useState([])

  useEffect(() => {
    setProjects(projectData)
  }, [])

  return (
    <main className='main-container'>
      <Nav />
      <Home />
      <About />
      <Projects 
        projects={ projects }
      />
      <Connect />
      {/* <FindMe /> */}
    </main>
  );
}

