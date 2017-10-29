import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getCurrentLayoutType } from '../ulits/react-container-query';

export default class Content extends Component {
    render() {
      const layoutType = getCurrentLayoutType(this.props.containerQuery);
        return (
            <div>
                This represents content to be responsive based on container size, not viewport.

                This layout is {layoutType}
            </div>
        );
    };
}

Content.PropTypes = {
    containerQuery: PropTypes.object
}