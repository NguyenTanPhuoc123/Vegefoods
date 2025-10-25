import './home.css';
import Hero from './components/Carousel/Carousel';
import { TopHeader } from './components/TopHeader/TopHeader';
import NavBar from './components/NavBar/NavBar';
import RowCircleQuality from './components/RowCircleQuality/RowCircleQuality';

function Home(){

  return (
    <>
    <TopHeader/>
    <NavBar/>
    <Hero/>
    <RowCircleQuality/>
    </>
  );
}

export default Home;