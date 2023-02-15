import { Link } from "react-router-dom"

const Navegacion = () => {
  return (

    <>
  <div  className='text-white flex justify-center'>
  <nav className="navegacion flex flex-col gap-4">
    <ul>
      <li><Link to="/">Historia</Link></li>
      <li><Link to="/objetivos">Objetivos</Link></li>
      <li><Link to="/articulos">Artículos</Link></li>
      <li><Link to="/videos">Videos</Link></li>
      <li><Link to="/contacto">Contacto</Link></li>
    </ul>
   
     
    </nav>
    </div>  

    <hr className="mt-5 mb-5 w-1/3 md:w-2/5 m-auto md:invisible"></hr>
</>
  )
}

export default Navegacion
