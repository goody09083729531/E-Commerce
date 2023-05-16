import React, { useRef, useState } from 'react';
import Link from 'next/link';

import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <header>
      <a className="logo">Nsikak</a>
      <nav className="navbar">
        <a className="active">Home</a>
        <a>Shop</a>
        <a>Contact</a>
      </nav>
      <div className="icons">
        <i className="fas fa-bars" id="menu-bars"></i>
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-twitter"></i>
        <i className="fa-solid fa-cart-shopping" onClick={() => setShowCart(true)}></i>
        <span className="cart-item-qty">{totalQuantities}</span>
      </div>

      {showCart && <Cart />}
    </header>
  )
}

export default Navbar