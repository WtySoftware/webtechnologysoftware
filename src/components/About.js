import logo from '../img/logoBlack.png'

function About({datos}){

    const {title,content} = datos


    return(
        <div className="container-fluid gray">
            <div className="container text-center white py-5">
                <h1>{title}</h1>
                <hr className='linea mx-auto' />
                <small>consectetur adipiscing elit. Mauris convallis</small><br />
                <img src={logo} alt="" />
                <h1 className='display-4'>Web Technology Software</h1>
                <p className='px-5'>{content}</p>
            </div>
        </div>
    )
}
export default About
//el white en responsive no queda pegado abajo. Pendiente