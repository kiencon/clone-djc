import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as ACTION from '../../store/action';

class Counter extends Component {    
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={() => this.props.onIncementCounter(this.props.storedResults)} />
                <CounterControl label="Decrement" clicked={() => this.props.onDecementCounter(this.props.storedResults)}  />
                <CounterControl label="Add 5" clicked={() => this.props.onAddedCounter(this.props.storedResults)}  />
                <CounterControl label="Subtract 5" clicked={() => this.props.onSubtractedCounter(this.props.storedResults)}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Action</button>
                <ul>
                    {
                        this.props.storedResults.map((e, index) => (
                            <li key={index}>{e}</li>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.counter.counter,
        storedResults: state.results.results
    };
}

const mapDispatchToProps = dispatch => {
    return {
        onIncementCounter: (results) => dispatch({type: ACTION.INCREMENT, payload: {results}}),
        onDecementCounter: (results) => dispatch({type: ACTION.DECREMENT, payload: {results}}),
        onAddedCounter: (results) => dispatch({type: ACTION.ADDITION, payload: { value: 5, results }}),
        onSubtractedCounter: (results) => dispatch({type: ACTION.SUBTRACTION, payload: { value: 5, results }}),
        onStoreResult: (counter) => dispatch({type: ACTION.RESTORED_RESULT, payload: {counter}}),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
