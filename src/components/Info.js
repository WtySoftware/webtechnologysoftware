
function Info({datos}){

    const {imgPosition,imagen,title,content} = datos
   
    return(
        <div className="container-fluid ">
            <div className="row altura">
                <div className="col-lg-6 col-md-8 align-self-center " style={{padding:"0px 75px"}}>
                    <h1>{title}</h1>
                    <p>{content}</p>
                </div>
                <div className={ imgPosition === "derecha" ? "order-first col-lg-6 col-md-4 infoBgImagen " + imagen : "order-last col-lg-6 col-md-4 infoBgImagen " + imagen} >
                </div>
            </div>
        </div>
    )
}
export default Info