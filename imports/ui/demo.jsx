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
        const { query, width, height, containerQuery } = this.props;
        return (
            <div className={classnames('demo-container', containerQuery)}>
                <Content containerQuery={this.props.containerQuery} />
            </div>
        );
    }
}

DemoContainer.PropTypes = {
    query: PropTypes.object,
    width: PropTypes.number,
    height: PropTypes.number,
    containerQuery: PropTypes.object
}

 export default Demo = applyContainerQuery(DemoContainer, query);