import React, {Component} from 'react';
import Person from './components/Person';
import HeartRate from './components/HeartRate';
import Water from './components/Water'; 
import Temperature from './components/Temperature';

const MIN_TEMPERATURE = -20;
const MAX_TEMPERATURE = 40;
const MIN_HEART = 80;
const MAX_HEART = 180;
const MIN_STEPS = 0;
const MAX_STEPS = 50000;

class App extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      water : 0,
      heart : 120,
      temperature : -10,
      steps : 30000
    }
    console.log('this.state', this.state);
    this.onHeartChange = this.onHeartChange.bind(this);
    this.onStepsChange = this.onStepsChange.bind(this);
    this.onTemperatureChange = this.onTemperatureChange.bind(this);
    
  } 
  
  // lifecycle methods (React methods) (alphabetical order)

  //event listeners (onClick..., on Change...)
  onHeartChange = (val) => {
    console.log('App has been called');
    this.setState({
      heart : val
    });
    
    // calculateWater
    this.calculateWater();
  }

  onStepsChange = (val) => {
    console.log('App has been called');
    this.setState({
      steps : val
    });

    // calculateWater
    this.calculateWater();
    
  }

  onTemperatureChange = (val) => {
    console.log('App has been called');
    this.setState({
      temperature : val
    });

    // calculateWater
    this.calculateWater();
    
  }

  // othrs methods (sub-render) (alphabetical order)
  calculateWater() {
    console.log ('App#calculaterWater'); 
    // const temperature = this.state.temperature // recupérer le state de fonction 
    const {
      temperature,
      steps,
      heart
    } = this.state;

    let curSteps = 0;
    let curTemp = 0;
    let curHeart = 0;

    if (steps > 10000) {
       curSteps = (steps - 10000) * 0.00002;
    }
    if (temperature > 20) {
       curTemp = (temperature - 20) * 0.02;
    }
    if (heart > 120) {
       curHeart = (heart - 120) * 0.0008; 
    } 

    const waterRaw = 1.5 + curSteps + curTemp + curHeart;
    // const water = Number(water.toFixed(2));
    const water = parseInt(waterRaw * 100) / 100; 

    console.log('App#calculateWater waterRaw', waterRaw);
    console.log('App#calculateWater water', water);

    this.setState({
      water: water 
    });

  }  

  render(){
    return (
      <div className="container-fluid">
        <div className="row">
          
            <Water
                water={this.state.water}/>
            <Person                
                min={MIN_STEPS}
                max={MAX_STEPS}    
                steps={this.state.steps}  
                onChange={this.onStepsChange}/>  
            <HeartRate                 
                min={MIN_HEART}
                max={MAX_HEART}
                heart={this.state.heart}
                onChange={this.onHeartChange}/> 
            <Temperature
                min={MIN_TEMPERATURE} 
                max={MAX_TEMPERATURE}
                temperature={this.state.temperature}                
                onChange={this.onTemperatureChange}/> 
                                    
        </div>
      </div>
    );
  }
}
 
export default App; 
