import React, { Fragment } from "react";
import '../index.css';
import Spinner2 from "./Spinner2";






const Traducir = ({preparacion,inicio,seEligioPreparacion}) => {
      
      
    // console.log(preparacion)
     
      
    return ( 
        <Fragment >
          <div class="container h-34 grid grid-cols-1  ">
            
          
       
          <div >
      
            { !seEligioPreparacion && !inicio
            ?  (<div className="flex grid-cols-3 justify-center content-center bg-gray-200 hover:bg-gray-400
            ">
              <Spinner2></Spinner2>
              <p className="h-20 items-center aling-center text-center font-bold text-xl bg-gray-400 hover:bg-gray-200  border-2 rounded  border-gray-900 py-3">
           Buscar cocktail por letra o Elegi uno de la lista </p>
           <Spinner2></Spinner2>
           </div>)
            
             :( 
               !seEligioPreparacion 
              ?  (<div className="flex grid-cols-3 justify-center content-center bg-gray-200 hover:bg-gray-400
            ">
              <Spinner2></Spinner2>
              <p className="h-20 items-center aling-center text-center font-bold text-xl bg-gray-400 hover:bg-gray-200  border-2 rounded  border-gray-900 py-3">
           Para ver preparación pulse la bandera del idioma que prefiera</p>
           <Spinner2></Spinner2>
           </div>)
           :(
            
             <div className="h-20 items-center aling-center text-center font-bold text-l overflow-clip overflow-hidden bg-gray-400 hover:bg-gray-200  border-2 rounded  border-gray-900 py-3">
            PREPARACIÓN :
            {preparacion}
            </div>
              ))
                   
          }       
           </div> 
            </div> 
  
        </Fragment>
     );
}
 
export default Traducir;