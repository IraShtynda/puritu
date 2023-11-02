import { Benefit } from "./Benefit";
import { benefits } from './benefits'

export const WhyUs = () => {
  return (
    <section className="bg-whyUs bg-no-repeat bg-cover bg-center">
      <div className='px-10 lg:max-w-7xl mx-auto flex pt-20 pb-20 gap-12'>

        <div className="md:w-1/2 text-base-blue-color">
          <h3 className=" text-2xl">Why us</h3>
          <h2 className="text-accent-blue-color text-4xl font-bold mt-2">Why Shop at Purity?</h2>
          <p className="text-xl mt-5 mb-8">Our range of handcrafted soaps is made to treat you and your skin, from morning washing-ups to evening relaxing baths.</p>

          <p>
            We are sure that using soap should be a pleasant experience — we create each soap bar not only to cleanse the skin but also to improve your mood, help you relax, and enjoy your bath rituals. We produce a vast range of different soaps with elegant smells and unique characteristics. You can shop right on this website and get your soap delivered really fast.
          </p>

          <div className='hidden gap-5 mt-12 md:flex'>
            {benefits.map(benefit => <Benefit key={benefit.id} benefit={benefit} />)}
          </div>
        </div>
      </div>
    </section>
  )
}