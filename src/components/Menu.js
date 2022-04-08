import { useState } from 'react';
import Logo from '../img/Logo.svg'

function Menu(){

    const [show, setShow] = useState("");
 
    let lastScrollTop = 0;

    window.addEventListener("scroll", function(){ 
       let st = window.pageYOffset || document.documentElement.scrollTop; 
       if (st > lastScrollTop){
            console.log(show)
            setShow("hidenMenu")
       } else {
            console.log(show)
            setShow("shownMenu")
       }
       lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
    }, false);

    return(
        <div className=''>
            <nav className={show+" container-fluid navbar navbar-expand-lg navbar-dark bgMenu fixed-top "}>
                <div className='container'>  
                    <a className="navbar-brand col-1 m-0 p-0" href="#">
                        <img className={"img-fluid"}  src={Logo} alt="Logo"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={"#"+1}>Service</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={"#"+8}>About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href={"#"+9}>Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Menu