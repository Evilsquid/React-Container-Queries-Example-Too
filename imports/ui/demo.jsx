import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Content from './content';
import {applyContainerQuery} from 'react-container-query';
import {query} from '../constants/react-container-query';

class DemoContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFixEnabled: false
    };
  }

  handleFixToggle = () => {
    this.setState({isFixEnabled: !this.state.isFixEnabled});
  }

  render() {
    const {query, width, height, containerQuery} = this.props;
    return (
      <div className={classnames('demo-container', this.state.isFixEnabled && containerQuery)}>
        <Content onFixToggle={this.handleFixToggle} isFixEnabled={this.state.isFixEnabled} containerQuery={this.props.containerQuery}/>
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