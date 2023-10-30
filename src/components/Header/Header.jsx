import { Banner } from './Banner';
import { Logo } from '../Logo';
import { Navigation } from './Navigation';
import { SocialIcons } from '../SocialIcons';

export const Header = () => {
  return (
    <header className="bg-banner bg-no-repeat bg-cover bg-center h-screen">
      <div className='max-w-7xl mx-auto'>
        <div className="flex justify-between items-center pt-5 pb-5 pl-10 pr-10">
          <Logo />
          <Navigation />
          <SocialIcons />
        </div>
        <Banner/>
      </div>
    </header>
  )
}