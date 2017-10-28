import React, { Component } from 'react';
import classnames from 'classnames';
import Button from './button';
import Demo from './demo';

import { LAYOUTS } from '../constants/react-container-query';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      layout: 0
    };
  }

  selectLayout(n) {
    this.setState({layout: n});
  }
  
 render() {
   return (
     <div className="container">
       <div className='container'>
        <div className='controls'>
          <Button onClick={() => this.selectLayout(0)} isActive={this.state.layout === 0}>mobile layout</Button>
          <Button onClick={() => this.selectLayout(1)} isActive={this.state.layout === 1}>tablet layout</Button>
          <Button onClick={() => this.selectLayout(2)} isActive={this.state.layout === 2}>desktop layout</Button>
        </div>
        <div><Demo width={LAYOUTS[this.state.layout].width} height={LAYOUTS[this.state.layout].height} /></div>
      </div>

     </div>
   );
 }
}