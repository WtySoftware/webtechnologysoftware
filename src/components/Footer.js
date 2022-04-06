function Footer({datos}){

    const {title,content} = datos


    return(
        <footer className="container-fluid text-center bgFooter">
            <div className="row" style={{height:"420px"}}>
                <div className="col-lg-6 col-md-8  mx-auto align-self-center">
                    <h1 className="">{title}</h1>
                    <p>{content}</p>
                    <button className="btn-second">Escribenos</button>
                </div>
            </div>
            <div className="footerIn ">
                <p className="copyright text-center m-0">Copyright © 2022 Web Tecnology Software <br /> Todos los derechos reservados</p>
            </div>

        </footer>
    )
}
export default Footer