import React, { Component } from 'react'
import { connect } from 'react-redux'
import { add, asyncAdd, getUser } from './actions/counter';

@connect(state => ({
    counter: state.counter
}), { add, asyncAdd, getUser })

class App extends Component {
    render() {
        return (
            <>
                <div onClick={() => this.props.asyncAdd()}>{this.props.counter}</div>
                <button onClick={() => this.props.getUser()}>获取数据</button>
            </>
        )
    }
}
export default App;
