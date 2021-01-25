import React, { Component } from 'react';
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionCreator from '../../store/action/action';

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
        onIncementCounter: () => dispatch(actionCreator.increament()),
        onDecementCounter: () => dispatch(actionCreator.decrement()),
        onAddedCounter: () => dispatch(actionCreator.add({ value: 5 })),
        onSubtractedCounter: () => dispatch(actionCreator.sub({value: 5})),
        onStoreResult: (counter) => dispatch(actionCreator.restore({counter})),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
