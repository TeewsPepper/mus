
import { Form, useActionData } from "react-router-dom";
import Formulario from "../components/Formulario";
import Error from "../components/Error";

export async function action({ request }) {
  const formData = await request.formData();
  

  const datos = Object.fromEntries(formData);
  
  const email = formData.get("email");

  // validate
  const errores = [];
  if (Object.values(datos).includes("")) {
    errores.push("Debes llenar el formulario");
   
  }

  let regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );

  if (!regex.test(email)) {
    errores.push("El email no es válido");
  }

  //Return data if wrong
  if (Object.keys(errores).length) {
    return errores;
  }
  return null;
}

function Contacto() {
  const errores = useActionData();
  

 
 

  

  return (
    <>
      <h2 className="text-center md:text-xl mb-10">Contáctanos</h2>

      {errores?.length && errores.map((error, i) => <Error key={i}>{error}</Error>)}

      <Form
        method="post"
        noValidate
        className="flex flex-col items-center text-white gap-4"
      >
        <Formulario />
        
          <input
            type="submit"
            className="w-20 text-sm text-center text-white py-2 border rounded-md"
            value="Enviar"
            
            
            
          ></input>
        
      </Form>
    </>
  );
}

export default Contacto;
