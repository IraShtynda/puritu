export const Category = ({ category }) => {

  return (
    <div className='flex flex-col gap-2 items-center ml-4 mr-4'>
      <img src={category.image} className="pl-5 pr-5"/>
      <h4 className="text-dark-color text-2xl font-bold">{category.title}</h4>
      <p className="text-base-trand-color h-20 text-center mb-5">
        {category.description}
      </p>
    </div>
  )
}