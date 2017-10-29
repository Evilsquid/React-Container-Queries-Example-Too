import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {getCurrentLayoutType} from '../ulits/react-container-query';
import classNames from 'classnames';

export default class Content extends Component {
 render() {
  const layoutType = getCurrentLayoutType(this.props.containerQuery);
  return (
   <div>
    <span className={'heading'}>AN AMAZING PAGE</span>
    <span className={'iconography'}><img width='200px' src='http://clipartist.net/links/clipartist.net/owl_lemmling-1979px.png' /></span>
    <span className={'subtext'}>This layout is {layoutType}</span>
    <span className={'cta'}><div>CLICK NOW!</div></span>
   </div>
  );
 };
}

Content.PropTypes = {
 containerQuery: PropTypes.object
}