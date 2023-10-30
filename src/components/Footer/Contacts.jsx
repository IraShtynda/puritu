export const Contacts = () => {
  return (
    <div className="w-1/4 flex flex-col gap-5" id='contacts'>
      <h4 className="text-trand-color text-2xl font-bold mt-2">Contacts<span className="text-accent-color">.</span></h4>
      <ul className="list-none flex flex-col gap-4 items-start font-semibold">
        <li>
          <p className="text-trand-color">E-mail</p>
          <p className="text-base-trand-color">purity@email.com</p>
        </li>
        <li>
          <p className="text-trand-color">Phone</p>
          <p className="text-base-trand-color">+1 (234) 567 89 00</p>
        </li>
        <li>
          <p className="text-trand-color">Adress</p>
          <p className="text-base-trand-color">889 Lexington Ave, New York</p>
        </li>
      </ul>
    </div>
  )
}