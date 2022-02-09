import { React, useContext } from 'react';
import { UserContext, Card } from '../context';

const Balance = () => {
    const ctx = useContext(UserContext);
    if (ctx.users[0]) {
        return (
            <Card
                bgcolor="light"
                txtcolor="black"
                header="Badbank Account Balance"
                title="Account Balance"
                text={`Your current balance is: $${ctx.users[0].balance}.`}
                link1="/deposit/"
                name1="Make a Deposit"
                link2="/withdraw/"
                name2="Make a Withdrawal"
            />
        )} else {
            return (
                <Card
                    bgcolor="light"
                    txtcolor="black"
                    header="Badbank Account Balance"
                    title="Account Required"
                    text="You must create an account before viewing your balance."
                    link1="/createaccount/"
                    name1="Click here to create your account"
                />
            );
        }
    };

export default Balance;