import Logo from '../img/Logo.svg'

function Menu(){
    return(
        
        <nav className="container navbar navbar-expand-lg navbar-dark fixed-top ">
            <a className="navbar-brand col-1 m-0 p-0" href="#">
                <img className='img-fluid' src={Logo} alt="Logo"/>
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
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Service</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="0">Contact</a>
                    </li>
                    
                   
                </ul>
            </div>
        </nav>
    )
}
export default Menu