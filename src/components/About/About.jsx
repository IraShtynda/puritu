export const About = () => {
  return (
    <>
      <img src='/images/section-top.png' />
      <section className='max-w-7xl mx-auto flex pt-10 pb-10 gap-12 items-center' id='about'>
        <img src='/images/about.png' className='w-1/2' />

        <div className="w-1/2">
          <h3 className="text-accent-color text-2xl">100% natural</h3>
          <h2 className="text-dark-color text-4xl font-bold mt-2">Great for Your Skin<span className="text-accent-color">.</span></h2>
          <img src='/images/plant.svg' className="h-8 mt-8" />
          <p className="text-trand-color text-xl mt-5 mb-8">Our organic soaps gently take care of your skin.</p>

          <ul className="list-image-checkmark text-4xl ml-6">
            <li className="text-base-trand-color mb-4">
              <p className="text-xl ml-1">Only natural ingredients are used in our soaps.</p>
            </li>
            <li className="text-base-trand-color mb-4">
              <p className="text-xl ml-1">We combine cold-pressed olive oil, coconut oil, and cocoa butter.</p>
            </li>
            <li className="text-base-trand-color mb-4">
              <p className="text-xl ml-1">Each bar of soap contains antioxidants and vitamin E.</p>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}