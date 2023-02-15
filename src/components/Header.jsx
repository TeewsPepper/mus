import '../../public/img/mus.jpeg'
import { Link } from 'react-router-dom'

function Header() {
  return (

    <>
    <header className='w-11/12 sticky py-2 border-white md:flex-row m-auto '>

    <h1 className="text-white text-center text-xl md:text-2xl">Movimiento Uruguay Soberano</h1>
    <nav className='banner'>
       
        <img className='w-32 h-32 rounded-full mt-3 m-auto' src='/img/mus.jpeg' href='Logo del movimiento   uruguay soberano'/>
       
            
  
    </nav>
    </header>
    <hr className="mt-5 mb-5 w-1/3 md:w-2/5 m-auto md:invisible"></hr>
    </>
  )
}



export default Header
