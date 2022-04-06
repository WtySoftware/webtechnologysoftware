import sipro from '../img/sipro.png'

function Mision({datos}){

    const {title, content} = datos
   
    return(
        <div className="container-fluid my-5">
            <div className="row altura">
                <div className="col-lg-6 col-md-12 col-sm-12 align-self-center"  style={{padding:"0px 75px"}}>
                    <h1>{title}</h1>
                    <p>{content}</p>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12">
                   
                        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src={sipro} class="d-block w-100" alt="..."/>
                                </div>             
                            </div>
                        </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Mision