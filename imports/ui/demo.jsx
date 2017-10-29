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
        const layoutType = '' + containerQuery;
        console.log('containerQuery: ', this.props.containerQuery);
        return (
            <div className={classnames('demo-container', containerQuery)}>
                <Content />
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