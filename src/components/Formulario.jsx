

function Formulario() {
  return (
    <>

    
    <div className='flex w-3/4  md:w-1/4   border rounded-md'>
      <input  type="text" 
              name="nombre" 
              id="nombre"  
              className='w-full  text-xs md:text-xl text-center bg-transparent p-1 '                    
              placeholder="Ingresa tu nombre" />
    </div>
      
     <div className='w-3/4  md:w-1/4 border rounded-md'>
      <input  type="email" 
              name="email" 
              id="email" 
              className='w-full text-xs md:text-xl text-center bg-transparent p-1'  
              placeholder="Ingresa tu e-mail" />
    </div>
      
    <div className='flex flex-col items-center'>
      <p className='text-sm text-center mb-6 mt-10 px-2'>Aceptaremos con gusto tus sugerencias y/o comentarios</p>
      <textarea className='w-3/5 md:w-4/5 text-sm text-center  bg-transparent border rounded-md mb-5' 
                name="mensaje"  
                id="mensaje"  
                cols="30" 
                rows="6" 
                placeholder="Escríbenos un mensaje">

      </textarea>
    </div>
   
   </>
  )
}
    

export default Formulario

    
    


  
