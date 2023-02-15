import { Link } from "react-router-dom"

export default function Footer() {
  return (

    <>
    <div className="text-white flex flex-col md:flex-row  p-2">
    <div className="m-auto">
      <nav className="ancla md:text-sm flex gap-1 md:flex md:gap-2">
        <Link className="scroll-mt-96 snap-start" to="/">Historia</Link>
        <Link className="scroll-mt-96 snap-start" to="/objetivos">Objetivos</Link>
        <Link className="scroll-mt-96 snap-start" to="/articulos">Artículos</Link>
        <Link className="scroll-mt-96 snap-start" to="/videos">Videos</Link>
        <Link className="scroll-mt-96 snap-start" to="/contacto">Contacto</Link>
      </nav>
    </div>
    <div className="flex m-auto  items-center gap-1">
        <p className="mus md:text-xs">
          Movimiento Uruguay Soberano {new Date().getFullYear()} 
        </p>
        <img className='rounded-full' src='/img/mus.jpeg' width={25} href='Logo del movimiento uruguay soberano'/>
      </div>
    </div>
     
      

    
    
    </>
  )
}
