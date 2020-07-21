import React, {Component} from 'react';
import Icon from './core/Icon';
import Slider from './core/Slider';
import 'rc-slider/assets/index.css';

class Temperature extends Component { 

    render() {
        return(
            <div className="box col-6 col-md-2">
                <Icon name={"wb_sunny"} color="yellow" />                
                <p>{this.props.temperature} °C</p> 
                <Slider 
                min={this.props.min} 
                max={this.props.max} 
                onChange={this.props.onChange} 
                value={this.props.temperature}/>                 
            </div>

        )
    }
}

export default Temperature;