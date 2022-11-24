import React from 'react';
import shopping_cart from '../../images/shopping-cart.png'
import './ShoppingCart.css'

class ShoppingCart extends React.Component {
  render () {
    return (
        <div className='ShoppingCart__container d-flex'>
            <img className='ShoppingCart__img' src={ shopping_cart } alt="shopping-cart" />
            <div className='ShoppingCart__cart-number'>8</div>
        </div>
    );
  }
}

export default ShoppingCart;