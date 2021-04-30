import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './Soda.css';

class Soda extends Component {
    render(){
        return(
            <div className="Soda">
                <img src="https://www.coca-colacompany.com/content/dam/journey/us/en/brands/coca-cola/coca-cola-original-282x130.png"></img>
                <p>OMG SUGAHH</p>
                <Link className='homelink' to="/">Go Back</Link>
                <img src="https://www.coca-colacompany.com/content/dam/journey/us/en/brands/coca-cola/coca-cola-original-282x130.png"></img>
            </div>
        )
    }
}

export default Soda;