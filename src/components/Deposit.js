import { React, useContext } from 'react';
import { UserContext } from '../context'

function Deposit() {
    const ctx = useContext(UserContext);
    return (
        <div>
            <h3>Deposit</h3>
                <p>Deposit my product!</p>
                {JSON.stringify(ctx)}
        </div>
    );
}

export default Deposit;