import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './store/actionCreators';
import { CSSTransition } from 'react-transition-group';
import './style.css'

class App extends Component {

  render() {
    const { flag, isClicked, handleOnClick, resetOnClick } = this.props;
    console.log(isClicked);
    return (
        <div onClick={handleOnClick}>
          <CSSTransition
            in={isClicked}
            timeout={300}
            classNames="rotate"
            onEntered={resetOnClick}
          >
            <span className="iconfont">&#xe601;</span>
          </CSSTransition>
          switch: {flag} {isClicked.toString()}
        </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    flag: "this is flag",
    isClicked: state.isClicked
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    handleOnClick() {
      dispatch(actionCreators.onClick())
    },
    resetOnClick() {
      dispatch(actionCreators.resetClick())
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
