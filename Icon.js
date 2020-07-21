import React, {Component} from 'react';

class Icon extends Component{
    render() {
        return(
            <span className="material-icons" style={{fontSize:100, color:this.props.color}}>
                {this.props.name}
            </span>
        )
    }
}

export default Icon;