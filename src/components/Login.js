import { React, useContext } from 'react';
import { UserContext, Card } from '../context';

function Login() {
    return (
        <Card
            bgcolor="light"
            txtcolor="black"
            header="Badbank Account Login"
            title="Log Into Your Account"
            text="Log in to your Badbank account"
        />
    );
}

export default Login;