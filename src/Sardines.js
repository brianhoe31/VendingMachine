import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Sardines.css';

class Sardines extends Component {
    render(){
        return (
            <div className="Sardines">
                <p>You don't eat sardines, the sardines eat you!</p>
                <Link to="/">Go Back</Link>
            </div>
        )
    }
}

export default Sardines;