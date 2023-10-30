import { About } from './components/About/About';
import { Categories } from './components/Categories/Categories';
import { Header } from './components/Header/Header';
import { WhyUs } from './components/WhyUs/WhyUs';
import { Shop } from './components/Shop/Shop';
import { Questions } from './components/Questions/Questions';
import { Footer } from './components/Footer/Footer';
import Basket from './components/Basket';

export const App = () => {

  return (
    <>
      <Basket/>
      <Header />
      <About />
      <Categories/>
      <WhyUs/>
      <Shop/>
      <Questions/>
      <Footer/>
    </>
  )
}

export default App
