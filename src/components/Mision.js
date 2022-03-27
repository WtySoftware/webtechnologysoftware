import mac from '../img/mac.png'
import test1 from '../img/test1.png'
import test2 from '../img/test2.png'
import test3 from '../img/test3.png'
function Mision({datos}){

    const {title, content} = datos
    console.log(datos)
    return(
        <div className="container-fluid my-5">
            <div className="row">
                <div className="col-6 p-5">
                    <h1>{title}</h1>
                    <p>{content}</p>
                </div>
                <div className="col-6">
                   
                        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                <img src={test1} class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                <img src={test2} class="d-block w-100" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                <img src={test3} class="d-block w-100" alt="..."/>
                                </div>
                            </div>
                           
                        </div>
                    
                </div>
            </div>
        </div>
    )
}
export default Mision