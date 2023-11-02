import { Logo } from '../Logo'
import { SocialIcons } from '../SocialIcons'
import { Navigation } from './Navigation'
import { Contacts } from './Contacts'
import { Button} from '../Button'
import top from '../../assets/images/footer-top.png'

export const Footer = () => {
  return (
    <>
      <img src={top} />
      <footer className='bg-bg-color'>
        <div className='px-10 lg:max-w-7xl mx-auto'>
          <div className='flex flex-col md:flex-row pt-10 pb-10 gap-12 items-start border-b border-base-trand-color'>
            <div className="md:w-1/3 flex flex-col gap-5 items-start">
              <Logo />
              <p className='text-base-trand-color'>We produce handmade soap from cold-pressed olive oil, coconut oil, and cocoa butter. Each of our soap bars is an extensive source of vitamin E and antioxidants. Turn your routine washing-up into a pleasant ritual.</p>
              <SocialIcons />
            </div>

            <Navigation/>

            <Contacts/>

            <div className="md:w-1/4 flex flex-col gap-5">
            <h4 className="text-trand-color text-2xl font-bold mt-2">Subscribe to receive our special offers.</h4>
            <form className="flex flex-col gap-5">
              <input type='Email' placeholder='Email' className="p-2"/>
              <Button text='Subscribe'/>
            </form>
            </div>
          </div>

          <div className='text-base-trand-color pt-5 pb-5 text-center'>© Created by</div>
        </div>
      </footer>
    </>
  )
}