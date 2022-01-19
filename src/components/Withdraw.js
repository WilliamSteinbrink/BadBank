import { React, useContext } from 'react';
import { UserContext } from '../context';

const Withdraw = () => {
    const ctx = useContext(UserContext);
    return (
        <div>
            <h3>Withdraw Component</h3>
            {JSON.stringify(ctx)}
        </div>
    );
}

export default Withdraw;