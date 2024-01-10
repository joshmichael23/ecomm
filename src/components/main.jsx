import React, { useState } from 'react';
import main from '@/styles/Main.module.css';
import Carousel from './carousel.jsx';
import Content from './content.jsx';
import Cart from './cart.jsx';

const Main = (props) => {
  
  return (
    <>
      <Cart 
        amount={props.amount} 
        setAmount={props.setAmount}
        openCart={props.openCart}
      />
      <main>

        <Carousel />
        <Content 
          amount={props.amount} 
          setAmount={props.setAmount}
        />
      </main>
    </>
  )
}

export default Main
