import React, { Component } from 'react'
import { connect } from 'react-redux'

import { increaseCounter, decreaseCounter, resetCounter, setCounter } from '../../../stateManagement/actions/counterActions'

class MyCounter extends Component {
  render() {
    return (
      <div>
        <h1>Counter Value = {this.props.mycounter}</h1>
        <hr />
        <button onClick={() => this.props.increase()}>++</button>
        <button onClick={() => this.props.decrease()}>--</button>
        <hr />
        <button onClick={() => this.props.reset()}>Reset Counter</button>
        <button onClick={() => this.props.update(55)}>Update Counter</button>
      </div>
    )
  }
}


const mapStateToProps = (state) => {
  return {
    mycounter: state.counterState.counter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    increase: () => dispatch(increaseCounter()),
    decrease: () => dispatch(decreaseCounter()),
    reset: () => dispatch(resetCounter()),
    update: (newValue) => dispatch(setCounter(newValue)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyCounter);
