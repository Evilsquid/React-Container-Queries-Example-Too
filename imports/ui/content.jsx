import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {getCurrentLayoutType} from '../ulits/react-container-query';
import classNames from 'classnames';

export default class Content extends Component {

 render() {
  const layoutType = getCurrentLayoutType(this.props.containerQuery);
  const headingText = (this.props.isFixEnabled) ? 'Fix is Enabled' : 'Fix is Not Enabled';
  return (
   <div>
    <span className={'heading'}>{headingText}</span>
    <span className={'iconography'}><img width='200px' src='http://clipartist.net/links/clipartist.net/owl_lemmling-1979px.png' /></span>
    <span className={'subtext'}>
    This layout is {layoutType}
    <button onClick={this.props.onFixToggle}>{this.props.isFixEnabled ? 'Disable Fix' : 'Enable Fix'}</button>
    </span>
    <span className={'cta'}><div>CLICK NOW!</div></span>
   </div>
  );
 };
}

Content.PropTypes = {
 containerQuery: PropTypes.object,
 isFixEnabled: PropTypes.bool,
 onFixToggle: PropTypes.func
}