import React, { Component } from 'react';
import { connect } from 'react-redux';

const Aux = props => props.children;

class Layout extends Component {

  render() {

    return (
      <Aux>
        {this.props.children}
      </Aux>
    )
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  };
};

export default connect(mapStateToProps)(Layout);