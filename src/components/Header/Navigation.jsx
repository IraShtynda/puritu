export const Navigation = () => {
  return (
    <nav>
      <ul className="text-lg font-semibold list-none flex gap-12 items-center">
        <li>
          <a href="#about" className="text-base-trand-color hover:text-dark-color">About Us</a>
        </li>
        <li>
          <a href="#categories" className="text-base-trand-color hover:text-dark-color">Categories</a>
        </li>
        <li>
          <a href="#shop" className="text-base-trand-color hover:text-dark-color">Shop</a>
        </li>
        <li>
          <a href="#contacts" className="text-base-trand-color hover:text-dark-color">Contacts</a>
        </li>
      </ul>
    </nav>
  )
}