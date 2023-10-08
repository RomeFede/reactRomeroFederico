import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  return (
    <header>
        <h1>Pizzeria Romero's</h1>

        <nav>
            <ul>
                <li>Pizzas</li>
                <li>Empanadas</li>
                <img src="https://static.vecteezy.com/system/resources/previews/012/037/974/non_2x/doodle-freehand-sketch-drawing-of-rosemary-free-png.png" alt="" />
                <li>Tartas</li>
                <li>Postres</li>
            </ul>
        </nav>

        <CartWidget/>
    </header>
  )
}

export default NavBar