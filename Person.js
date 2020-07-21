import React, {Component} from 'react';
import Icon from './core/Icon';
import Slider from './core/Slider';
import 'rc-slider/assets/index.css';

class Person extends Component {
    
    render() {
        console.log('cmp/Person#render this.props', this.props);
        return (
            <div className="box col-6 col-md-2">
                <Icon name={"directions_walk"} color="black" />    
                <p>{this.props.steps} steps</p>    
                <Slider 
                min={this.props.min} 
                max={this.props.max} 
                onChange={this.props.onChange} 
                value={this.props.steps}/>                                                  
            </div>
        )
    }
}

export default Person; 