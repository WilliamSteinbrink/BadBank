import { React, useContext } from 'react';
import { UserContext, Card } from '../context';

const Withdraw = () => {
    return (
        <Card
            bgcolor="light"
            txtcolor="black"
            header="Withdraw"
            title="Withdraw From An Account"
            text="Withdraw your moolah"
        />
    );
}

export default Withdraw;