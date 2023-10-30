import { useState } from 'react';
import { selectItems, selectTotalQuantity, selectTotalSum } from '../store/cartSlice';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Замінено кому на точку з комою
import { faShoppingBag, faXmark } from '@fortawesome/free-solid-svg-icons'; // Замінено іконку на faShoppingBag

const Basket = () => {
  const items = useSelector(selectItems);
  const totalQuantity = useSelector(selectTotalQuantity);
  const totalSum = useSelector(selectTotalSum);
  const [showModal, setShowModal] = useState(false);

  return ((totalQuantity > 0) && <div>
    <div onClick={() => setShowModal(true)} className='fixed top-16 right-6 rounded-full bg-bg-color z-5 shadow-xl'>
      <FontAwesomeIcon icon={faShoppingBag} className='h-10 w-10 p-5' />
      <div className='fixed w-6 h-6 top-16 right-6 rounded-full bg-dark-color z-6 shadow-xl text-light-color text-xs flex justify-center items-center font-semibold'>{totalQuantity}</div>
    </div>
    {showModal && (
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-10 outline-none">
          <div className="relative my-6 mx-auto w-1/2 bg-light-color text-base-trand-color">
            <div className="shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-center justify-between p-5 bg-bg-color">
                <h4 className="text-xl font-bold">
                  Shopping cart
                </h4>
                <button onClick={() => setShowModal(false)}>
                <FontAwesomeIcon icon={faXmark} />
                </button>
              </div>
              <div className="relative p-5">
                <div>
                  {items.map((item) => (<CartItem
                    key={item.id}
                    id={item.id}
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    quantity={item.quantity}
                    totalPrice={item.totalPrice}
                  />))}
                </div>
                <p className='text-end font-bold mt-5'>Total price: ${totalSum}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    )}
  </div>
  );
};

export default Basket;
