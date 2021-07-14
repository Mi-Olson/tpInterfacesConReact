import { Fragment } from 'react';
import './Spinner.css';


const Spinner = () => {

    return (
<Fragment>
         <div class="spinner">
        <div class="double-bounce1"></div>
        <div class="double-bounce1"></div>
        <div class="double-bounce2"></div>
        <div class="double-bounce2"></div>
        </div> 
  </Fragment>
  );
}
 
export default Spinner;