export const Button = ( props ) => {
  const { text } = props;

  return (
    <button className="pt-2 pr-8 pb-2 pl-8 font-bold bg-accent-color text-light-color border-2 border-accent-color hover:bg-dark-color hover:border-dark-color">{text} &rarr;</button>
  )
}