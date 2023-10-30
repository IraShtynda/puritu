export const Benefit = ({ benefit }) => {

  return (
    <div className='flex flex-col gap-2 items-start'>
      <img src={benefit.image} className="p-3 rounded-full h-16 w-16 bg-blue-bg-color"/>
      <p className="text-lg font-bold text-accent-blue-color">{benefit.title}</p>
    </div>
  )
}