import Hero from './components/Carousel/Carousel';
import { TopHeader } from './components/TopHeader/TopHeader';
import NavBar from './components/NavBar/NavBar';
import RowCircleQuality from './components/RowCircleQuality/RowCircleQuality';
import Category from './components/Category/Category';
import Products from './components/Products/Products';
import Deal from './components/Deal/Deal';

function Home(){

  return (
    <>
    <TopHeader/>
    <NavBar/>
    <Hero/>
    <RowCircleQuality/>
    <Category/>
    <Products/>
    <Deal/>
    </>
  );
}

export default Home;