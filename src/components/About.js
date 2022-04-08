import logo from '../img/logoBlack.png'

function About({datos}){

    const {id,title,content} = datos


    return(
        <div id={id} className="container-fluid gray">
            <div className="container text-center white py-5">
                <h1>{title}</h1>
                <hr className='linea mx-auto' />
                <small>Un equipo con grandes metas</small><br />
                <img src={logo} alt="" />
                <h1 className='display-4'>Web Technology Software</h1>
                <p className='px-5'>{content}</p>
            </div>
        </div>
    )
}
export default About
//el white en responsive no queda pegado abajo. Pendiente