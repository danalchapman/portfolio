import { Nav } from '../Nav/Nav'
import { About } from '../About/About'
import { FindMe } from '../FindMe/FindMe'
import './App.css';

export const App = () => {
  return (
    <main className='main-container'>
      <Nav />
      <About />
      <FindMe />
    </main>
  );
}

