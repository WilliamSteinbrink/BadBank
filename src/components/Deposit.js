import { React, useContext } from 'react';
import { UserContext, Card } from '../context'

function Deposit() {
    return (
        <Card
            bgcolor="light"
            txtcolor="black"
            header="Deposit"
            title="Make A Deposit"
            text="Here is where you deposit money"
        />
    );
}

export default Deposit;