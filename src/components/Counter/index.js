import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { incrementAction, decrementAction } from 'store/counter/actions';
import { selectValue } from 'store/counter/selector';


const Counter = () => {

    const dispatch = useDispatch();
    const value = useSelector(selectValue);

    const incrementHandle = () => {
        dispatch(incrementAction());
    }

    const decrementHandle = () => {
        dispatch(decrementAction())
    }

    return (
        <div>
            <div>
                <h1>CURRENT SCORE {value}</h1>
                <button onclick={incrementHandle}>Increment</button>
                <button onclick={decrementHandle}>Decrement</button>
            </div>
        </div>
    )
}

export default Counter;