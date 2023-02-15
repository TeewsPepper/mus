import { Link } from "react-router-dom"


function Objetivos() {
  return (
    <>
    
      <div className='w-10/12 md:w-8/12 flex flex-col m-auto'>
        <h3 className='text-center text-white text-lg  md:text-2xl mb-5 md:mb-10  '>Objetivos</h3>
        
      </div>
       
      <div className="w-10/12 md:w-8/12 flex gap-10 md:gap-12 flex-col m-auto">
        <img src='./img/puntos.jpg' alt='imagen de los objetivos del movimiento'/>
      </div>

      <div className="flex justify-center mb-3">
          <Link to='/'>
            <button type="button" className="text-white border p-2 mt-3">Volver</button>
          </Link>
      </div>

      <div className="w-10/12 md:w-8/12 flex gap-10 md:gap-12 flex-col m-auto">   
        <img src='./img/otra.jpg' alt='imagen de los objetivos del movimiento'/>
      </div>
    </>
  )
}

export default Objetivos
