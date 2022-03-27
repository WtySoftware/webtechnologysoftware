import logo from '../img/logoBlack.png'

function About(){
    return(
        <div className="container-fluid gray">
            <div className="container text-center white py-5">
                <h1 className=''>Acerca de Nosotros</h1>
                <small>consectetur adipiscing elit. Mauris convallis</small><br />
                <img src={logo} alt="" />
                <h1 className='display-4'>Web Tecnology Software</h1>
                <p className='px-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis tristique risus vitae imperdiet. Aliquam erat volutpat. Etiam porttitor, quam ac rhoncus mollis, sem libero pharetra elit, quis semper erat orci quis nibh. Quisque est sem, euismod vel velit eu, semper dictum turpis. Sed semper quam velitLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris convallis tristique risus vitae imperdiet. Aliquam erat volutpat. Etiam porttitor, quam ac rhoncus mollis, sem libero pharetra elit, quis semper erat orci quis nibh. Quisque est sem, euismod vel velit eu, semper dictum   turpis. Sed semper quam velit, vitae porttitor ipsum., vitae porttitor ipsum.</p>
            </div>
        </div>
    )
}
export default About
//el white en responsive no queda pegado abajo. Pendiente