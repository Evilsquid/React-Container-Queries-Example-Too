import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Content from './content';
import { applyContainerQuery } from 'react-container-query';
import { query } from '../constants/react-container-query';
class DemoContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { query, width, height } = this.props;
        console.log('demo props: ', this.props);
        return (
            <div className={classnames('demo-container')} style={{ width: `${width}px`, height: `${height}px`}}>
                Content
            </div>
        );
    }
}

DemoContainer.PropTypes = {
    query: PropTypes.object,
    width: PropTypes.number,
    height: PropTypes.number
}

 export default Demo = applyContainerQuery(DemoContainer, query);