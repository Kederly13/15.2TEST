import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import { depositMoneyAction, withdrawMoneyAction } from 'store/bank/actions';
import { selectMoney } from 'store/bank/selector';

import './styles.css';

const AppContent = () => {
    const [depositValue, setDepositValue] = useState(0);
    const [withdrawValue, setwithdrawValue] = useState(0);

    const dispatch = useDispatch();
    const money = useSelector(selectMoney);

    const depositMoney = () => {
        dispatch(depositMoneyAction(depositValue));
    }

    const withdrawMoney = () => {
        dispatch(withdrawMoneyAction(withdrawValue));
    }
    
    const handleChange = (e, type) => {
        if (type === 'deposit') {
            setDepositValue(e.target.value)
        }
        if (type === 'withdraw') {
            setwithdrawValue(e.target.value)
        }
    }

    return (
        <div className="AppContent">
            <h1>Our bank: {money}</h1>
            <div>
                <div>
                    <h3>How much do you want to deposit?</h3>
                    <input type='number' value={depositValue} onChange={(e) => handleChange(e, 'deposit')} />
                </div>
                <button onClick={depositMoney} className='typicalBtn'>Deposit Money</button>
            </div>
            <div>
                <div>
                    <h3>How much do you want to withdraw?</h3>
                    <input type='number' value={withdrawValue} onChange={(e) => handleChange(e, 'withdraw')} />
                </div>
                <button onClick={withdrawMoney} className='typicalBtn'>withdrawMoney</button>
            </div>
        </div>
    )
}

export default AppContent;