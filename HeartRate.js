import React, {Component} from 'react';
import Icon from './core/Icon';
import Slider from './core/Slider';
import 'rc-slider/assets/index.css';

class HeartRate extends Component { 
    
    render() {
        console.log('cmp/HeartRate#render this.prop', this.props);
        return(
            <div className="box col-6 col-md-2">
                <Icon name={"favorite"} color="red" />   
                <p>{this.props.heart} BPM</p>             
                <Slider 
                min={this.props.min} 
                max={this.props.max} 
                onChange={this.props.onChange} 
                value={this.props.heart}/>                
                                  
            </div>

        )
    }
}

export default HeartRate; 