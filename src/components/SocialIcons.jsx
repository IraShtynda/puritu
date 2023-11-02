import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

export const SocialIcons = () => {
  return (
    <div className="flex gap-7 items-center">
      <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
        <FontAwesomeIcon
          icon={faFacebookF}
          className="w-5 h-5 text-trand-color hover:text-dark-color"
        />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
        <FontAwesomeIcon
          icon={faInstagram}
          className="w-5 h-5 text-trand-color hover:text-dark-color"
        />
      </a>
      <a href="https://www.youtube.com" target="_blank" rel="noreferrer">
        <FontAwesomeIcon
          icon={faYoutube}
          className="w-5 h-5 text-trand-color hover:text-dark-color"
        />
      </a>
    </div>
  )
}