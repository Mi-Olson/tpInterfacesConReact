import React, { Fragment } from 'react';

const Encabezado = ({bebida1,bebida2,cargarInicio}) => {
 
     
  
    return ( 
        <Fragment>
          <div className="flex ">
          {/* <div className="container grid grid-cols-3 h-34 items-center aling-center */}
            {/* text-center font-bold text-2xl bg-blue-400 hover:bg-blue-200  border-2 rounded  border-blue-500"> */}
           <div className="container grid grid-rows-3 grid-flow-col gap-4 h-34 items-center aling-center font-bold text-2xl bg-blue-400 hover:bg-blue-200  border-2 rounded  border-blue-500">
              <div className="row-span-3 ">            
              <img src={bebida2} className="w-60 h-32 rounded-full mx-auto border border-purple-200 hover:border-transparent focus:outline-none "  alt="" width="384" height="600"/>
              </div> 
             
          
         
              <div className="row-span-2 col-span-2 text-center content-end">  
               <p className="text-4xl ">Cocktail</p>
              </div>
              <div className="row-span-3  ">
              <img src={bebida1} className="w-60 h-32 rounded-full mx-auto border border-purple-200 hover:border-transparent focus:outline-none "  alt="" width="384" height="600"/> </div>
             <div className="row-span-3 col-span-1  ">
                <button className="bg-blue-600 rounded-full mx-auto border border-purple-200 hover:border-transparent focus:outline-none text-lg p-1" width="50" height="50" onClick={()=>cargarInicio(false)} >INICIO </button>
             </div>
             </div>
            
   
</div>

             
        
              
                  
                
                  
                
           
       
          
        

        </Fragment>
     );
}
 
export default Encabezado;
