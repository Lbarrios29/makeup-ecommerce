import React from 'react'
import {Link} from 'react-router-dom'
import './footer.css'

function Footer() {

    return (
    
            // <!-- Footer -->
            <footer className="bg-dark">    
                <div className="container-fluid">
                    <div className="row p-5 pb-1">

                        {/* <!-- Columna Contacto --> */}
                        <div className="col-lg-4 col-md-6 col-sm-12 ps-md-5">
                            <p className="h6 text-uppercase text-white fw-bold mb-3 letterSpacing">
                                Contacto
                            </p>
                            <div className="mb-2 mb-lg-3">
                                <a href="https://www.google.com/maps/place/Caballito,+CABA/@-34.616655,-58.4622398,14z/data=!3m1!4b1!4m5!3m4!1s0x95bcca3911f8ab2d:0x27b394c2f3d87d2d!8m2!3d-34.6159245!4d-58.4406027"
                                    className=" text-decoration-none textoFooter" target="_blank" rel="noopener noreferrer">
                                    {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house " viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                                        <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                                    </svg> */}
                                    Caballito, Caba, Argentina
                                </a>
                            </div>
                            <div className="mb-2 mb-lg-3">
                                <a href="mailto:info@gmail.com" className="text-decoration-none textoFooter" target="_blank"
                                    rel="noopener noreferrer">
                                    <i className="bi bi-envelope"></i>
                                    info@gmail.com
                                </a>
                            </div>
                            <div className="mb-4">
                                <a href="https://api.whatsapp.com/send?phone=5411618107&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Makeup."
                                    className="text-decoration-none textoFooter" target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-telephone"></i>
                                    +541116235478
                                </a>
                            </div>
                        </div>

                        {/* <!-- Columna Secciones --> */}
                        <div className="col-lg-4 col-md-6 col-sm-12 ps-lg-5">
                            <p className="h6 text-uppercase text-white fw-bold mb-3 letterSpacing">
                                Secciones
                            </p>

                            <Link to='/home' className="text-decoration-none">
                                <div className="mb-2 mb-lg-3 ">
                                    <a href="index.html" className=" text-decoration-none textoFooter">
                                        Home
                                    </a>
                                </div>
                            </Link>

                            <Link to='/nosotros' className="text-decoration-none">
                                <div className="mb-2 mb-lg-3 ">
                                    <a href="html/nosotros.html" className=" text-decoration-none textoFooter">
                                        Nosotros
                                    </a>
                                </div>
                            </Link>

                            <Link to='/servicios' className="text-decoration-none">
                                <div className="mb-2 mb-lg-3 ">
                                    <a href="html/servicios.html" className=" text-decoration-none textoFooter">
                                        Servicios
                                    </a>
                                </div>
                            </Link>

                            <Link to='/galeria' className="text-decoration-none">
                                <div className="mb-2 mb-lg-3 ">
                                    <a href="html/galeria.html" className=" text-decoration-none textoFooter">
                                        Galería
                                    </a>
                                </div>
                            </Link>

                            <div className="mb-4 ">
                                <Link to='/contacto' className="text-decoration-none">
                                    <a href="html/contacto.html" className=" text-decoration-none textoFooter">
                                        Contacto
                                    </a>
                                </Link>
                            </div>
                        </div>

                        {/* <!-- Columna Redes Sociales --> */}
                        <div className="col-lg-4 col-md-12 col-sm-12 ps-md-5">
                            <p className="h6 text-uppercase text-white fw-bold mb-4 letterSpacing">
                                Redes Sociales
                            </p>
                            <div className="mb-2 mb-lg-3 ">
                                <a href="https://www.facebook.com/Elidiazmkp-102206465077886/about/?ref=page_internal"
                                    className="me-1  text-decoration-none textoFooter" target="_blank"
                                    rel="noopener noreferrer">
                                    <i className="bi bi-facebook"></i>
                                    Facebook
                                </a>
                            </div>

                            <div className="mb-2 mb-lg-3 ">
                                <a href="https://twitter.com/?lang=es" className="me-1  text-decoration-none textoFooter"
                                    target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-twitter"></i>
                                    Twitter
                                </a>
                            </div>

                            <div className="mb-2 mb-lg-3 ">
                                <a href="https://www.instagram.com/elidiazmkp/"
                                    className="me-1  text-decoration-none textoFooter" target="_blank"
                                    rel="noopener noreferrer">
                                    <i className="bi bi-instagram"></i>
                                    Instagram
                                </a>
                            </div>

                            <div className="mb-2 mb-lg-3 ">
                                <a href="https://ar.linkedin.com/" className="me-1  text-decoration-none textoFooter"
                                    target="_blank" rel="noopener noreferrer">
                                    <i className="bi bi-linkedin"></i>
                                    Linkedin
                                </a>
                            </div>
                        </div>

                        {/* <!-- Copyright --> */}
                        <div className="col-12 text-center m-3 text-muted">
                            © 2021 Copyright
                        </div>

                    </div> 
                    {/* <!-- row --> */}
                </div> 
                {/* <!-- container-fluid --> */}
            </footer>        
    
    )
}

export default Footer
