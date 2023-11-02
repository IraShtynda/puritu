import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cartSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const CartItem = ({ id, image, title, price, quantity, totalPrice }) => {

  const dispatch = useDispatch();
  return (
    <div>
      <div className='flex items-center justify-between p-2'>
        <div className='w-1/6'><img src={image} alt={title} height='60px' width='60px' /></div>
        <p className='w-3/6 font-lg font-semibold'>{title}</p>
        <div className='w-1/6 flex gap-2'>
          <button className='border px-1' onClick={() => dispatch(cartActions.decreaseCount({ id }))}><FontAwesomeIcon icon={faMinus} /></button>
          <p className='w-8 text-center'>{quantity}</p>
          <button className='border px-1' onClick={() => dispatch(cartActions.increaseCount({ id, title, price }))}><FontAwesomeIcon icon={faPlus} /></button>
        </div>
        <p className='w-1/6 text-end'>${totalPrice}</p>
      </div>
    </div >
  );
};

export default CartItem;