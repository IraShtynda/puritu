import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

export const SocialIcons = () => {
  return (
    <div className="flex gap-7 items-center">
      <FontAwesomeIcon 
        icon={faFacebookF} 
        className="w-5 h-5 text-trand-color hover:text-dark-color" 
      />
      <FontAwesomeIcon 
        icon={faInstagram} 
        className="w-5 h-5 text-trand-color hover:text-dark-color" 
      />
      <FontAwesomeIcon 
        icon={faYoutube} 
        className="w-5 h-5 text-trand-color hover:text-dark-color" 
      />
    </div>
  )
}