import { Fragment } from 'react';
import './Spinner.css';


const Spinner = () => {

    return (
<Fragment>
         <div className="grid grid-flow-cols-1 bg-gray-100 mx-10 w-100% h-300">
         <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
        <div class="double-bounce2"></div>
        </div> 
        </div> 
  </Fragment>
  );
}
 
export default Spinner;