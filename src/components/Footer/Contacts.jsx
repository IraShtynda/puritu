export const Contacts = () => {
  return (
    <div className="md:w-1/4 flex flex-col gap-5" id='contacts'>
      <h4 className="text-trand-color text-2xl font-bold mt-2">Contacts<span className="text-accent-color">.</span></h4>
      <ul className="list-none flex flex-col gap-4 items-start font-semibold">
        <li>
          <p className="text-trand-color">E-mail</p>
          <a href="mailto:purity@email.com" className="text-base-trand-color">purity@email.com</a>
        </li>
        <li>
          <p className="text-trand-color">Phone</p>
          <a href="tel:12345678900" className="text-base-trand-color">+1 (234) 567 89 00</a>
        </li>
        <li>
          <p className="text-trand-color">Adress</p>
          <a href="https://maps.app.goo.gl/hW3R3Saj8ueymHSV8" className="text-base-trand-color">889 Lexington Ave, New York</a>
        </li>
      </ul>
    </div>
  )
}