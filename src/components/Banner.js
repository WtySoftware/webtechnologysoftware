import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiagnoses } from '@fortawesome/free-solid-svg-icons'
import { faPencilRuler } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faCubes } from '@fortawesome/free-solid-svg-icons'
import { faRocket } from '@fortawesome/free-solid-svg-icons'


function Banner({banner}){

    const {welcome,title,content} = banner
   
    return(
        <header className='container-fluid banner'>
            <div className="container" style={{height:"100vh"}}>
                <div className="center">
                    <div className="col-10 mx-auto text-center message ">
                        <h1 className="display-5 m-0">
                            {welcome}<br/> 
                            <span className="display-3">{title}</span> 
                        </h1>
                        <p className="">{content}</p>
                    </div> 
                </div>  
                <div className="row text-center">
                    
                        <div className="col">
                                <FontAwesomeIcon icon={faDiagnoses} size="2x" />
                                <h6>Analisis</h6>

                        </div>
                        <div className="col">
                                <FontAwesomeIcon icon={faPencilRuler} size="2x" />
                                <h6>Diseño</h6>
                        </div>
                        <div className="col">
                                <FontAwesomeIcon icon={faCode} size="2x" />
                                <h6>Desarrollo</h6>
                        </div>
                        <div className="col">
                                <FontAwesomeIcon icon={faCubes} size="2x" /> 
                                <h6>Pruebas</h6>
                        </div>
                        <div className="col">
                                <FontAwesomeIcon icon={faRocket} size="2x" /> <br />
                                <h6>Lanzamiento</h6>
                        </div>
                    </div>  
                
            </div>
        </header>
    )
}
export default Banner;