import React, {Component} from 'react';
import Icon from './core/Icon';

class Water extends Component { 
    
    render() {
        return(
            <div className="box col-6 col-md-2">
                <Icon name={"local_drink"} color="blue" />                
                <p>{this.props.water} L</p>  
                              
            </div>

        )
    }
}

export default Water;