export const Button = ( props ) => {
  const { text, link } = props;

  return (
    <a href={link} className="flex items-center h-12 px-8 font-bold bg-accent-color text-light-color border-2 border-accent-color hover:bg-dark-color hover:border-dark-color">{text} &rarr;</a>
  )
}