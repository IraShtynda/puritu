export const Navigation = () => {
  return (
    <div className="md:w-1/6 flex flex-col gap-5">
      <h4 className="text-trand-color text-2xl font-bold mt-2">Navigation<span className="text-accent-color">.</span></h4>
      <ul className="text-lg font-semibold list-none flex flex-col gap-4 items-start">
        <li>
          <a href="#" className="text-base-trand-color hover:text-dark-color">About Us</a>
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
    </div>
  )
}