import React, {Component} from 'react';
import { Link } from "react-router-dom";
import './Chips.css';
import Chip from './Chip';

class Chips extends Component {
    constructor(props){
        super(props);
        this.state = { 
            eaten: 0,
            chipSticker: []
        }
        this.eatChip = this.eatChip.bind(this);
    }

    eatChip(){
        const x = Math.floor(Math.random() * 1500);
        const y = Math.floor(Math.random() * 500);


        this.setState(st => ({
            eaten: this.state.eaten + 1,
            chipSticker: [...this.state.chipSticker, {x: x, y:y}]
        }))
    }

    render(){
        const chips = this.state.chipSticker.map(chip => (
            <Chip x={chip.x} y={chip.y}/>
        ))
        
        return(
            <div>
                <p>Bags Eaten: {this.state.eaten}</p>
                <button onClick={this.eatChip}>Om OM OM</button>
                <Link to="/">Go Back</Link>
                {chips}
            </div>
        )
    }
}

export default Chips;