import { Button } from "../Button"

export const Banner = () => {
  return (
    <div className="pt-32">
      <h3 className="text-accent-color text-2xl">Cosmetics you deserve</h3>
      <h1 className="text-dark-color text-5xl md:text-6xl lg:text-7xl font-bold mt-2">Handcrafted <br />Organic <span className="text-accent-color">Soap.</span></h1>
      <p className="text-trand-color text-lg md:text-xl mt-8 mb-10">Making your body and thoughts clean and clear.</p>

      <div className="flex flex-col md:flex-row gap-5 md:gap-10 max-w-xs md:max-w-md ">
        <Button text='Shop Now' link='#shop'></Button>
        <a href='#about' className="flex items-center h-12 px-8 font-bold text-dark-color border-2 hover:text-light-color hover:bg-dark-color">About Us</a>
      </div>
    </div>
  )
}