import { React, useContext } from 'react';
import { UserContext } from '../context';

function Login() {
    const ctx = useContext(UserContext);
    return (
        <div>
            <h3>Login Component</h3>
                {JSON.stringify(ctx)}
        </div>
    );
}

export default Login;