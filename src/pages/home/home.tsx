import './home.css';
import Hero from './components/Carousel/Carousel';
import { TopHeader } from './components/TopHeader/TopHeader';
import NavBar from './components/NavBar/NavBar';

function Home(){

  return (
    <>
    <TopHeader/>
    <NavBar/>
    <Hero/>

    </>
  );
}

export default Home;