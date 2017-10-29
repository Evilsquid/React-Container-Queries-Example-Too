import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Content extends Component {
    render() {
        return (
            <div>
                This represents content to be responsive based on container size, not viewport.

                This layout is {this.props.layoutType}
            </div>
        );
    };
}

Content.PropTypes = {
    layoutType: PropTypes.any
}