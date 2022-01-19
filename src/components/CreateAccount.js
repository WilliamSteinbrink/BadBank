import { UserContext } from '../context';
import { React, useContext } from 'react';

function CreateAccount() {
    const ctx = useContext(UserContext);
    return (
        <div>
            <h3>CreateAccount Component</h3>
            {JSON.stringify(ctx)}
        </div>
    );
}

export default CreateAccount;