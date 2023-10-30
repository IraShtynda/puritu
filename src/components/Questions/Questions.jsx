import { AccordeonItem } from "./AccordeonItem"
import plant from '../../assets/images/plant.svg'
import questions from '../../assets/images/questions.png'

export const Questions = () => {


  return (
    <section className='max-w-7xl mx-auto flex pt-10 pb-8 gap-12 items-start'>
      <div className="w-1/2">
        <h3 className="text-accent-color text-2xl">Questions</h3>
        <h2 className="text-dark-color text-4xl font-bold mt-2">Still Have Questions?<span className="text-accent-color">.</span></h2>
        <img src={plant} className="h-8 mt-8" />
        <p className="text-trand-color text-xl mt-5 mb-8">Read the sections below and contact us if you need a consultation or any kind of help.</p>

        <div>
          <AccordeonItem title='How can I make the order?' content='Simply add the soap you like to the shopping cart and specify your shipping address. We provide free delivery for orders over $40.' />
          <AccordeonItem title='Do you have an offline store?' content='Yes, we have a small soap shop in New York where you can try and smell all our soaps.' />
          <AccordeonItem title='Do you ship worldwide?' content='Due to Covid-19 restrictions, we ship only across the USA for now, but were planning to ship to Europe again in the near future.' />
          <AccordeonItem title='How can I change my order?' content='We are really fast at shipping your orders, so if you want to change anything or cancel the order, call us as soon as possible. Well try our best to make the changes.' />
        </div>
      </div>

      <img src={questions} className='w-1/2' />
    </section>
  )
}