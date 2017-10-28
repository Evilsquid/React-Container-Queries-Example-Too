import React, { Component } from 'react';
import classnames from 'classnames';
import Button from './button';
import Demo from './demo';

import { query, LAYOUTS } from '../constants/react-container-query';

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
   console.log('query ', query);
   return (
     <div className="container">
       <div className='container'>
        <div className='controls'>
          <Button onClick={() => this.selectLayout(0)} isActive={this.state.layout === 0}>mobile layout</Button>
          <Button onClick={() => this.selectLayout(1)} isActive={this.state.layout === 1}>tablet layout</Button>
          <Button onClick={() => this.selectLayout(2)} isActive={this.state.layout === 2}>desktop layout</Button>
        </div>
        <div><Demo query={query} width={LAYOUTS[this.state.layout]}/></div>
      </div>

     </div>
   );
 }
}