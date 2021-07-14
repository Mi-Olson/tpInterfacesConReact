import React, {useState} from 'react';
import styled from '@emotion/styled';

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;
const Label = styled.label`
    flex: 0 0 100px;
`;
const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`;

const Boton = styled.button`
    background-color: #00838f;
   
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover{
        cursor: pointer;
        background-color: #26C6DA;
    }
`;

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 3rem;
`;

const Formulario = ( {cargarEleccion,keyword,opcion,guardarCargando,consultarAPI} ) => {

// Hago el state para leer el form
const [datos, guardarDatos] = useState({
    dato:'',
   
});
console.log(datos)


// Hago el state de error

const [error, guardarError] = useState(false);

// Extraigo valores

const {dato} = datos;

// Leer los datos del form
const obtenerInformacion = key => {
    guardarDatos({
        ...datos,
        [key.target.name]:key.target.value
       
       
    })
};

const buscarTrago = e => {
    // Prevengo el default
    e.preventDefault();

    // Valido el formulario
    if (dato.trim() === ""){
        guardarError(true);
        return;
    };

    // Repongo el error
    guardarError(false);

    


    // Gestiono el spinner
    guardarCargando(true);
    setTimeout(() => {
        // Paso el cargando a false
        // para eliminar el spinner
        guardarCargando(false);
        console.log(dato);

         // Corrijo el state que traje
         // y lo paso al componenente ppal
            cargarEleccion(
               ...dato 
           )
            keyword=dato
            opcion='s=';
            consultarAPI({keyword,opcion})
            
            }, 2000);
   ;
};


    return ( 
        <form
            onSubmit={buscarTrago}
        >
            { error 
            ? <Error>
                Todos los campos deben completarse
            </Error>
            : null }
           
            <Campo>
                <Label>Tragos Clasicos</Label>
                <Select
                    name="dato"
                    value={dato}
                    onChange={obtenerInformacion}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="margarita">margarita</option>
                    <option value="daiquiri">daiquiri</option>
                    <option value="mojito">mojito</option>
                    <option value="martini">martini</option>
                    <option value="caipirinha">caipirinha</option>
                    <option value="campari">campari</option>
                    <option value="acapulco">acapulco</option>
                    <option value="negroni">negroni</option>
                    <option value="bloody mary">bloody mary</option>
                    <option value="tia-maria">tia-maria</option>
                </Select>
            </Campo>
           
            <Boton
                type="submit"    
            >
                Cargar eleccion
            </Boton>
        </form>
     );
}
 
export default Formulario;