import React, { Fragment,useState } from 'react';
import styled from '@emotion/styled';
import uuid from 'uuid/dist/v4';
const Boton = styled.button`
    display: flex;
    background-color: #00838f;
    align-items: center;
    font-size: 10px;
    justify-content: center;
    width: 10px;
    height: 10px;
    padding: 1rem;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    border: 1px solid #000000;
   
    transition: background-color .3s ease;
    margin-top: 2rem;
    
    &:hover{
        cursor: pointer;
        background-color: #646768;
        border: 1px solid #07a12d;
        color: #080808;
        
    };
    `;

const Abc = ({cargarNuevosDatos,letraElegida,key,letra,consultarAPI,cargarEleccion,keyword,opcion }) => {
    const [datos, guardarDatos] = useState({
        dato:'',
       
    });
    let {dato}=datos;
    datos.id = uuid();
    
    //dato=letra;
   // guardarDatos(dato);
    /* guardarDatos({
        ...datos,
        [dato]:letra
       
       
    }) */

   // opcion ='f=';
    const abcEleccion = letra => {
        dato=letra;
        guardarDatos({
            ...datos,
            dato})
        opcion ='f=';
        keyword=letra;
        cargarNuevosDatos(dato);
       // cargarEleccion([...letraElegida,letra])
        consultarAPI({keyword,opcion})
        console.log(letra,opcion)
     
    
    }
   
    
     
    

    return ( 
        <Fragment>
           <div >
             <Boton onClick={()=>abcEleccion(letra)} >
           
            {letra}
           
          </Boton>    
          </div>
        </Fragment>
     );
}
 
export default Abc;