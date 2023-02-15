import { Nav } from '../Nav/Nav'
import { About } from '../About/About'
import { Projects } from '../Projects/Projects'
import { Connect } from '../Connect/Connect'
import { FindMe } from '../FindMe/FindMe'
import './App.css';

export const App = () => {
  return (
    <main className='main-container'>
      <Nav />
      <About />
      <Projects />
      <Connect />
      <FindMe />
    </main>
  );
}

