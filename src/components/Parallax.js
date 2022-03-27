function Parallax({datos}){

    const {title,content,bg} = datos

   console.log(datos)
    

    return(
        <div className={"container-fluid parallax " + bg}>
            <div className="col-8 text-center">
                <h1 className="display-3">{title}</h1>
                <p>{content}</p>
            </div> 
        </div>
    )
}
export default Parallax