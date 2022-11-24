import React from 'react';
import logo from '../../images/logo-maceta.png'
import ShoppingCart from '../ShoppingCart/ShoppingCart'
import './NavBar.css'

class Navbar extends React.Component {
  render () {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className='d-flex justify-content-between w-100'>
          <div className='d-flex'>
            <a className="Navbar__brand" href="/">
              <img className='Navbar__brand-logo' src={ logo } alt="logo" />
              <span className="Navbar__brand-span">Flower <strong>Pot</strong></span>
            </a>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#">Macetas de plástico</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Macetas de madera</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Macetas decoradas</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Macetas terracota</a>
                </li>
              </ul>
            </div>
          </div>

          <ShoppingCart />
        </div>
      </nav>
    );
  }
}

export default Navbar;
