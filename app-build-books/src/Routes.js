import React, { Component } from 'react';

import { withRouter, Route, Switch } from 'react-router-dom';

import PropTypes from 'prop-types';

import { Home, AllBooks, FindBooks } from './components';

export default class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/AllBooks" component={AllBooks} />
        <Route exact path="/FindBooks" component={FindBooks} />
        {/* <Route exact path="/Login" component={LoginForm} />
        <Route exact path="/Signup" component={SignUpForm} />
        // <Route exact path="/AllVideo" component={AllBooks} />
        <Route exact path="/Track" component={TrackVideo} />
        <Route exact path="/ViewHistory" component={VideoViews} />
        <Route exact path="/Keyword" component={KeywordListing} /> */}
      </Switch>
    );
  }
}
