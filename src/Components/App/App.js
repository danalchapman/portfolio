import { Nav } from '../Nav/Nav'
import { FindMe } from '../FindMe/FindMe'
import './App.css';

export const App = () => {
  return (
    <main className='main-container'>
      <Nav />
      <FindMe />
    </main>
  );
}

