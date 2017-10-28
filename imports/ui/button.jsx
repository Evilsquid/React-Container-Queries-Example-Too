import React, {Component} from 'react';
import classnames from 'classnames';

export default class Button extends Component {
    render() {
        const {isActive, children} = this.props;
    
        return (
          <div className={classnames('example-btn', {'example-btn-active': isActive})} onClick={this.props.onClick}>
            {children}
          </div>
        );
      }
}