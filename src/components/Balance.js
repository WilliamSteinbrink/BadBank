import { React, useContext } from 'react';
import { UserContext, Card } from '../context';
import { Link } from 'react-router-dom';

const Balance = () => {
    const ctx = useContext(UserContext);
    return (
        <Card
            bgcolor="light"
            txtcolor="black"
            header="Badbank Account Balance"
            title="Account Balance"
            text={ctx.users[0] && `Your current balance is: $${ctx.users[0].balance}.`}
            link1="/deposit/"
            name1="Make a Deposit"
            link2="/withdraw/"
            name2="Make a Withdrawal"
            />
    );
}

export default Balance;