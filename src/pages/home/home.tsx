import './home.css';
import Hero from './components/Carousel/Carousel';
import { TopHeader } from './components/TopHeader/TopHeader';
import NavBar from './components/NavBar/NavBar';
import RowCircleQuality from './components/RowCircleQuality/RowCircleQuality';
import Category from './components/Category/Category';

function Home(){

  return (
    <>
    <TopHeader/>
    <NavBar/>
    <Hero/>
    <RowCircleQuality/>
    <Category/>
    </>
  );
}

export default Home;