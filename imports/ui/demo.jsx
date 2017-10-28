import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { ContainerQuery, applyContainerQuery } from 'react-container-query';

class DemoContainer extends Component {
    constructor(props) {
        super(props);
    }

    renderItems = () => {
        return [0, 1, 2, 3, 4].map((n) => (
            <li className={classnames('demo-item', {'demo-item-feature': n === 0 })} key={n}>
                <div className='demo-item-content'>
                    Some Content
                </div>
            </li>
        ));
    }

    render() {
        const width = this.props.width;
        const { query } = this.props;
        console.log('demo render ', width, query);
        return (
            <div className={classnames('demo-container')} style={{ width: `${width}px`}}>
                <ol className='demo-list'>{this.renderItems()}</ol>
            </div>
        );
    }
}

DemoContainer.PropTypes = {
    query: PropTypes.object,
    width: PropTypes.number
}

export default App = applyContainerQuery(DemoContainer, DemoContainer.query);