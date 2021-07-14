import React, { Fragment } from 'react'
const Elecciones = ({unaLetra}) => {
    console.log(unaLetra)
    return ( 
        <Fragment>
            
             <div className="px-4 py-1 text-xs text-gray-900 font-semibold rounded-full border-2 border-gray-600 hover:text-white hover:bg-gray-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-green-400  focus:ring-offset-2 text-center">{unaLetra}</div>
            
        </Fragment>
     );
}
 
export default Elecciones;