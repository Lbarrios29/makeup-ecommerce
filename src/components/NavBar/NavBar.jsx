import React from 'react';
import CartWidget from './CartWidget';
import '../NavBar/navBar.css';
import Logo from "./images/logodiaz.png";
import {Link} from 'react-router-dom'

function NavBar() {
    return (
                
        <header>
            <nav className="navbar navbar-expand-sm">
                <div className="container">

                    {/* <!-- Logo --> */}
                    <Link to='/'>
                        <a className="navbar-brand ms-3" href="index.html">
                    
                            <img src={Logo} 
                                 alt="logo"
                                 className="logo__img--center wow animate__animated animate__flipInX"/>
                    
                        </a>
                    </Link>

                    {/* <!-- Boton Hamburguesa --> */}
                    <button className="navbar-toggler custom-toggler me-4 wow animate__animated animate__bounceInDown"
                            type="button" 
                            data-bs-toggle="collapse" 
                            data-bs-target="#navbarNav" 
                            aria-controls="navbarNav"
                            aria-expanded="false" 
                            aria-label="Toggle navigation">
                        
                        <span className="navbar-toggler-icon"></span>
                    
                    </button>

                    {/* <!-- Menu listado de opciones --> */}
                    <div className="collapse navbar-collapse pe-5" 
                         id="navbarNav">
                        
                        <ul id="menuHeader" 
                            className="navbar-nav ms-auto">
                            
                            <Link to='/' className="text-decoration-none">
                                <li className="nav-item">
                                    <a className="nav-link fw-bold text-uppercase menuSecciones wow animate__animated animate__bounceInDown"
                                        href="index.html" 
                                        data-wow-delay="0.2s">
                                        Home
                                    </a>
                                </li>
                            </Link>
                            
                            <Link to='/nosotros' className="text-decoration-none">
                                <li className="nav-item">
                                    <a className="nav-link  fw-bold text-uppercase menuSecciones wow animate__animated animate__bounceInDown"
                                       href="html/nosotros.html" 
                                       data-wow-delay="0.3s">
                                        Nosotros
                                    </a>
                                </li>
                            </Link>

                            <Link to='/servicios' className="text-decoration-none">
                                <li className="nav-item">
                                    <a className="nav-link  fw-bold text-uppercase menuSecciones wow animate__animated animate__bounceInDown"
                                       href="html/servicios.html" 
                                       data-wow-delay="0.4s">
                                        Servicios
                                    </a>
                                </li>
                            </Link>

                            {/* <Link to='/productos' className="text-decoration-none">
                                <li className="nav-item">
                                    <a className="nav-link  fw-bold text-uppercase menuSecciones wow animate__animated animate__bounceInDown"
                                       href="html/servicios.html" 
                                       data-wow-delay="0.5s">
                                        Productos
                                    </a>
                                </li>
                            </Link> */}
                            
                            <li className="nav-item dropdown ">
                                <a className="nav-link dropdown-toggle fw-bold text-uppercase menuSecciones wow animate__animated animate__bounceInDown" 
                                   href="home" 
                                   id="navbarDropdown" 
                                   role="button" 
                                   data-bs-toggle="dropdown" 
                                   aria-expanded="false">
                                    Productos
                                </a>
                                <ul className="dropdown-menu bg-dark" 
                                    aria-labelledby="navbarDropdown">

                                    <Link to='/productos/maquillaje'
                                          className="text-decoration-none">    
                                        <li>
                                            <a className="dropdown-item text-white hoverOpciones" href="test">
                                                Maquillaje
                                            </a>
                                        </li>
                                    </Link>

                                    <Link to='/productos/uñas' className="text-decoration-none">
                                        <li>
                                            <a className="dropdown-item text-white hoverOpciones" href="test">
                                                Uñas
                                            </a>
                                        </li>
                                    </Link>
                                </ul>
                            </li>

                            <Link to='/galeria' className="text-decoration-none">
                                <li className="nav-item">
                                    <a className="nav-link  fw-bold text-uppercase menuSecciones wow animate__animated animate__bounceInDown"
                                       href="html/galeria.html" 
                                       data-wow-delay="0.6s">
                                        Galería
                                    </a>
                                </li>
                            </Link>

                            <Link to='/contacto' className="text-decoration-none">
                                <li className="nav-item">
                                    <a className="nav-link  fw-bold text-uppercase menuSecciones wow animate__animated animate__bounceInDown"
                                       href="html/contacto.html" 
                                       data-wow-delay="0.6s">
                                        Contacto
                                    </a>
                                </li> 
                            </Link>

                        </ul>

                    </div>
                    < CartWidget />
                </div> {/*<!-- container -->*/}
            </nav>
        </header>
    )
}

export default NavBar
