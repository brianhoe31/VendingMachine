import React, {Component} from 'react';
import './Chip.css';

class Chip extends Component {
    render(){
        return(
            <img className="Chip" src="https://images.heb.com/is/image/HEBGrocery/001865742" style={{ top: this.props.y + 'px', left: this.props.x + 'px'}}></img>
        )
    }
}

export default Chip;