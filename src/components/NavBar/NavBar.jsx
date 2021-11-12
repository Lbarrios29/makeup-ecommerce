import React from 'react';
import CartWidget from '../CartWidget';
import '../NavBar/navBar.css';

function NavBar() {
    return (
        <header>
                <nav>
                    <div className="headerNavAncho">

                        <div className="logo">
                            <a href=" ">
                                <img src="./images/logodiaz.png" alt="logo" className="logo__img--center"/>
                            </a>
                        </div>

                        <div className="menu">
                            <ul className="menu__items">
                                <li>
                                    <a href=" ">HOME</a>
                                </li>
                                <li>
                                    <a href=" ">NOSOTROS</a>
                                </li>
                                <li>
                                    <a href=" ">SERVICIOS</a>
                                </li>
                                <li>
                                    <a href=" ">GALERIA</a>
                                </li>
                                <li>
                                    <a href=" ">CONTACTO</a>
                                </li>
                            </ul>
                        </div>

                        <CartWidget />

                    </div>
                </nav>
        </header>
    )
}

export default NavBar
