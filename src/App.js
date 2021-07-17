
import Spinner from './components/Spinner';
import Spinner2 from './components/Spinner2';

import React ,{ useState,useEffect, Fragment}from 'react';
import bebida1 from './images/bebida1.jpg';
import bebida2 from './images/bebida2.jpg';
import italia from './images/italia.png';
import inglaterra from './images/inglaterra.png';
import alemania from './images/alemania.png';
import Traducir from './components/Traducir';
import Frase from './components/Frase';
import Encabezado from './components/Encabezado';
import Formulario from './components/Formulario';
import './index.css';
import Abc from './components/Abc';
import Elecciones from './components/Elecciones';



function App () {
 
// guarda la preparacion y la usamos en Traducir
  const [preparacion,cargarPreparacion]=useState([]);
  // Gestionar el spinner

const [cargando, guardarCargando] = useState(false);

 
  // guarda el abecedario
   const[letra,cargarLetra ]=useState( [
    {id:1, letra:"a"},{id:2, letra:"b"},{id:3, letra:"c"},{id:4, letra:"d"},{id:5, letra:"e"},
    {id:6, letra:"f"},{id:7, letra:"g"},{id:8, letra:"h"},{id:9, letra:"i"},{id:10, letra:"j"},
    {id:11, letra:"k"},{id:12, letra:"l"},{id:13, letra:"m"},{id:14, letra:"n"},{id:15, letra:"o"},
    {id:16, letra:"p"},{id:17, letra:"q"},{id:18, letra:"r"},{id:19, letra:"s"},{id:20, letra:"t"},
    {id:22, letra:"v"},{id:23, letra:"w"},{id:25, letra:"y"},{id:26, letra:"z"}
   ])
 
  
 // es para imprimir las cards de tragos(resumen)
  const [frase, setFrase] = useState([]);
  // con  la trivia pasamos de mostrar la pantalla de busqueda a la pantalla con los resultados
  const [inicio,cargarInicio]=useState(false);
  const [seEligioPreparacion,actualizarStatePreparacion]=useState(false);
   
  
//  letras elegidas en local storage
let consultasGeneradas = JSON.parse(localStorage.getItem("letraElegida"));
if (!consultasGeneradas) {
  consultasGeneradas = [];
}
//Array guardamos todas las opciones seleccionadas
const[letraElegida,cargarEleccion]=useState(consultasGeneradas);

useEffect ( () => {
let consultasGeneradas = JSON.parse(localStorage.getItem("letraElegida"));
  if (consultasGeneradas) {
    localStorage.setItem('letraElegida', JSON.stringify(letraElegida))
  }else{
    localStorage.setItem('letraElegida', JSON.stringify([]));
  }
}, [letraElegida]);
const cargarNuevosDatos = dato => {
  cargarEleccion([...letraElegida, dato]);
}


  let keyword;
  let opcion;
  const consultarAPI = async ({keyword = 'a',opcion='f='}) => {
    try{
     cargarInicio(true)
     const url= `https://www.thecocktaildb.com/api/json/v1/1/search.php?${opcion}${keyword}`;

    const api = await fetch(url);
    
   
    const frases = await api.json();
    const frase=frases.drinks;
    setFrase(frase);
   
   
    }
    catch (error){
      console.log(error);
    }
   
 
   }
   
  
  return (
    <Fragment >
      <div className=" grid grid-cols-1   "> 
          <div className="grid grid-cols-1   mt-0  w-full fixed  ">
    
              <div className="">
                  <Encabezado
                    
                    bebida1={bebida1}
                    bebida2={bebida2}
                    cargarInicio={cargarInicio}
                    actualizarStatePreparacion={actualizarStatePreparacion}
                        
                  />
        
               </div> 
                <div>
           
                  <Traducir
                  
                    preparacion={preparacion}
                    seEligioPreparacion={seEligioPreparacion}
                    inicio={inicio}
                    />
                 </div> 
        
      
        </div>
      {/* ACA EMPIEZA LA SECCCION ELECCION DE OPCIONES O CARDS */}

     
        <div className="mt-60 gap-2 ">
       {/* DOS OPCIONES A DESARROLLAR TRIVIA */}
       {
         !inicio
        //  ?(<div className="flex grid-cols-2"  >
           ?(<div className="flex grid-cols-3 gap-10 mx-10"  >
              <div className="grid grid-cols-3 gap-1 md:grid-cols-4 md:gap-1 lg:grid-cols-6 lg:gap-1  ">  
                    {letra.map(unaLetra=>(
                      <Abc
                        key={unaLetra.id}
                        letra={unaLetra.letra}
                        consultarAPI={consultarAPI}
                        cargarEleccion={cargarEleccion}
                        keyword={keyword}
                        opcion={opcion} 
                        cargarNuevosDatos={cargarNuevosDatos}
           
                      
                      /> 
                    ))}
          
                </div> 
              <div className="flex grid-cols-1 gap-10 mx-10">

                <Formulario
                keyword={keyword}
                opcion={opcion}
                guardarCargando={guardarCargando}
                consultarAPI={consultarAPI}
                cargarNuevosDatos={cargarNuevosDatos}
                />
                 {/* {cargando ? <Spinner /> : null}  */}
              </div> 
              <div>
              <p className="text-lg font-semibold text-center">LETRAS Y PALABRAS ELEGIDAS</p>
                <div className="grid grid-cols-3 gap-1 md:grid-cols-4 md:gap-1 lg:grid-cols-5 lg:gap-1  ">  
                  {letraElegida.map(unaLetra=>(
                    <Elecciones
                    unaLetra={unaLetra}
                    />))}
                </div>
              </div>

           </div>)
// se muestra el resultado de las consultas
       :( 

            <div className="grid grid-cols-1 gap-1 md:grid-cols-2 md:gap-1 lg:grid-cols-3 lg:gap-1   mx-10">  
           
                {frase.map(fra => (
                    <Frase 
                      key = {fra.idDrink}
                      strDrinkThumb = {fra.strDrinkThumb}
                      strDrink = {fra.strDrink}
                      strIngredient1={fra.strIngredient1}
                      strIngredient2={fra.strIngredient2}
                      strIngredient3={fra.strIngredient3}
                      strMeasure1={fra.strMeasure1}
                      strMeasure2={fra.strMeasure2}
                      strMeasure3={fra.strMeasure3}
                      strInstructionsIT={fra.strInstructionsIT}
                      strInstructionsDE={fra.strInstructionsDE}
                      strInstructions={fra.strInstructions}

                      cargarPreparacion={cargarPreparacion}
                      preparacion={preparacion}
                      italia={italia}
                      alemania={alemania}
                      inglaterra={inglaterra}
                     

                      
                      id={fra.idDrink}
                     
                      actualizarStatePreparacion={actualizarStatePreparacion}
                      
                    />
                  ))}
              
              </div>)
              }
              {/* TERMINA CARDS-ARRIBA */}
          </div>
      </div>
  
     
    </Fragment>
 
  );
  }  
  export default App;  
