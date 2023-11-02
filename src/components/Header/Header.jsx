import { useState } from 'react';
import { Banner } from './Banner';
import { Logo } from '../Logo';
import { Navigation } from './Navigation';
import { SocialIcons } from '../SocialIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { BurgerMenu } from './BurgerMenu';
import { Menu } from "burger-menu";
import 'burger-menu/lib/index.css'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-bg-color md:bg-banner bg-no-repeat bg-cover bg-center">
      <div className='px-10 lg:max-w-7xl mx-auto h-screen'>
        <div className="hidden lg:flex justify-between items-center py-5">
          <Logo />
          <Navigation />
          <SocialIcons />
        </div>
        <div className="flex lg:hidden justify-between items-center py-5">
          <div onClick={() => setIsOpen(!isOpen)}><FontAwesomeIcon
            icon={isOpen ? faXmark : faBars}
            className="w-5 h-5 text-trand-color hover:text-dark-color"
          /></div>
          <Logo />
          <Menu isOpen={isOpen} onClose={() => setIsOpen(false)} side='right'>
            <BurgerMenu />
          </Menu>
        </div>

        <Banner />
      </div>
    </header>

  )
}