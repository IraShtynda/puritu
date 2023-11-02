import { selectItems, cartActions } from '../../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { id, image, title, price } = product;
  const items = useSelector(selectItems);
  const isInCart = items.find((item) => item.id === product.id);

  return (
    <div className='flex flex-col items-center ml-4 mr-4'>
      <img src={image} className="mb-5" />
      <h4 className="text-trand-color text-lg font-semibold">{title}</h4>
      <p className="text-base-trand-color text-lg text-center mb-5 font-semibold">
        ${price},00
      </p>
      <button className="pt-2 pr-8 pb-2 pl-8 font-bold bg-accent-color text-light-color border-2 border-accent-color hover:bg-dark-color hover:border-dark-color disabled:border-dark-color disabled:bg-dark-color"
        disabled={isInCart}
        onClick={() => dispatch(cartActions.addItemToCart({ id, image, title, price, quantity: 1 }))}>
        {isInCart ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  )
}