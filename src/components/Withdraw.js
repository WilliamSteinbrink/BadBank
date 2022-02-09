import { React, useContext, useState } from 'react';
import { UserContext, Card } from '../context';

function Withdraw() {
    const [ show, setShow ] = useState(true);
    const [ status, setStatus ] = useState('');
    const [ amount, setAmount ] = useState('');
    const ctx = useContext(UserContext);

    function validate(field) {
        if (!field) {
            setStatus('Error: enter a number');
            alert('Error: enter a number');
            setTimeout(() => setStatus(''), 3000);
            return false;
        } else if (isNaN(amount)) {
            setStatus('Error: enter a valid number.');
            alert('Error: enter a valid number.');
            setTimeout(() => setStatus(''), 3000);
            return false;
        } else if (amount <=0) {
            setStatus('Error: withdrawal amount must be positive.');
            alert('Error: withdrawal amount must be positive.');
            setTimeout(() => setStatus(''), 3000);
            return false;
        } else if (amount > ctx.users[0].balance) {
            setStatus('Error: not enough funds to cover withdrawal.');
            alert('Error: not enough funds to cover withdrawal.');
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
        return true;
    }
    
    function handleWithdraw() {
        console.log(amount);
        if (!validate(amount)) return;
        ctx.users[0].balance -= parseInt(amount);
        setShow(false);
    }
    
    function clearForm(){
        setAmount(0);
        setShow(true);
    }

    if (ctx.users[0]) {
        return (
            <Card
                bgcolor="light"
                txtcolor="black"
                header="Withdraw"
                status={status}
                body={show ? (
                    <>
                    Amount<br/>
                    <input type="input" className="form-control" id="amount" placeholder="Enter Amount" value={amount} onChange={e => setAmount(e.currentTarget.value)} /><br/>
                    <button type="submit" disabled={!amount} className="btn btn-light border-dark w-100" style={{maxWidth: '20rem'}} onClick={handleWithdraw}>Make a Withdrawal</button>
                    </>
                ):(
                    <>
                        <h5>Success!</h5>
                        <div>You have withdrawn ${amount} from your account.</div>
                        <div>Your new balance is ${ctx.users[0].balance}.</div>
                        <button type="submit" disabled={!amount} className="btn btn-light border-dark w-100" style={{maxWidth: '20rem'}} onClick={clearForm}>Make Another Withdrawal</button>
                    </>
                )}
                title="Withdraw From Your Account"
                text={ctx.users[0] ? `Your current balance is: $${ctx.users[0].balance}.` : 'Please log in to make a withdrawal'}
            />
        );
    } else {
        return (
            <Card
                bgcolor="light"
                txtcolor="black"
                header="Badbank Withdrawal"
                title="Account Required"
                text="You must create an account before making a withdrawal."
                link1="/createaccount/"
                name1="Click here to create your account"
            />
        );
    };
}

export default Withdraw;