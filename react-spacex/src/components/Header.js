import React, {Component} from'react';
import starlinkLogo from '../assets/images/Starlink_Logo.svg';

class Header extends Component {
  render(){
    return (
      <hearder className = "App-header">
        <img src={starlinkLogo} className="App-logo" alt='here is logo'/>
        <p className='title'>
          STARLINK Tracker with SpaceX
        </p>
      </hearder>
    );
  }
}

export default Header;