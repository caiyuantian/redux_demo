import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider, connect} from 'react-redux';
import { createStore, combineReducers} from 'redux';

class Counter extends React.Component {
    render() {
        let { value, onClickAdd, onClickMinus } = this.props;
        return (
            <div>
                <p>{value}</p>
                <button onClick = {onClickAdd}>Add 1</button>
                <button onClick = {onClickMinus}>Minus 1</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {value: state.value}
}

const mapDispatchToProps = (dispatch) => {
    return {
        onClickAdd: () => dispatch({type: "CLICK_ADD"}),
        onClickMinus: () => dispatch({type: "CLICK_MINUS"})
    }
}


const Example = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter)

const Reducer = ( state = { value: 0 }, action ) => {
    let value = state.value;
    switch (action.type) {
        case "CLICK_ADD":
            return { ...state, value: value + 1}
            case "CLICK_MINUS":
            return { ...state, value: value - 1}
        default:
            return state
    }
}

var store = createStore(Reducer);

ReactDOM.render(
    <Provider store = { store }>
        <Example />
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
