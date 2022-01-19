import { React, useContext } from 'react';
import { UserContext, Card } from '../context';

const Balance = () => {
    return (
        <Card
            bgcolor="light"
            txtcolor="black"
            header="Badbank Account Balance"
            title="Account Balance"
            text="This is where your balance goes"
        />
    );
}

export default Balance;