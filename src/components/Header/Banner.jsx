import { Button } from "../Button"

export const Banner = () => {
  return (
    <div className="pt-32 pl-10 pr-10 max-h-full">
      <h3 className="text-accent-color text-2xl">Cosmetics you deserve</h3>
      <h1 className="text-dark-color text-7xl font-bold mt-2">Handcrafted <br />Organic <span className="text-accent-color">Soap.</span></h1>
      <p className="text-trand-color text-xl mt-8 mb-10">Making your body and thoughts clean and clear.</p>

      <div className="flex gap-10">
        <Button text='Shop Now'></Button>
        <button className="pt-4 pr-8 pb-4 pl-8 font-bold text-dark-color border-2 hover:text-light-color hover:bg-dark-color">About Us</button>
      </div>
    </div>
  )
}