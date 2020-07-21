import React from 'react';

import RCSlider from 'rc-slider';
import 'rc-slider/assets/index.css';

class Slider extends React.Component{
    render(){
        console.log('cmp/core/Slider#render this.props')
        return(
            <div className="container">
                <RCSlider 
                min={this.props.min}
                max={this.props.max}
                value={this.props.value}
                onChange={this.props.onChange}
                />
            </div>
        );
    }
}

export default Slider;