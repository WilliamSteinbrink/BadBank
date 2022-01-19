import { React, useContext } from 'react';
import { UserContext } from '../context';

const Balance = () => {
    const ctx = useContext(UserContext);
    return (
        <div>
            <h3>Balance Component</h3>
            <p>This is your sad balance</p>
            {JSON.stringify(ctx)}
        </div>
    );
}

export default Balance;