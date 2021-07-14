import React, { Fragment } from "react";
import '../index.css';
import Spinner2 from "./Spinner2";






const Traducir = ({preparacion,inicio}) => {
      
      
      console.log(preparacion)
     
      
    return ( 
        <Fragment >
          <div class="container h-34 grid grid-cols-1  ">
            
          {/* <div class="flex justify-center  grid grid-cols-1 h-34 items-center aling-center "> */}
       
          <div >
            {preparacion.length === 0 || !inicio
            ?  (<div className="flex grid-cols-3 justify-center content-center bg-gray-200 hover:bg-gray-400
            ">
              <Spinner2></Spinner2>
              <p className="h-20 items-center aling-center text-center font-bold text-xl bg-gray-400 hover:bg-gray-200  border-2 rounded  border-gray-900 py-3">
           Seleccionar cocktail para ver preparación</p>
           <Spinner2></Spinner2>
           </div>)
            
             :
             (
            
             <div className="h-20 items-center aling-center text-center font-bold text-l overflow-clip overflow-hidden bg-gray-400 hover:bg-gray-200  border-2 rounded  border-gray-900 py-3">
            PREPARACIÓN :
            {preparacion}
            </div>
              )
                   
          }        
           </div> 
            </div> 
  
        </Fragment>
     );
}
 
export default Traducir;