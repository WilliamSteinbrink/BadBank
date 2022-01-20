import { React, useContext, useState } from 'react';
import { UserContext, Card } from '../context'

function Deposit() {
    const [ show, setShow ] = useState(true);
    const [ status, setStatus ] = useState('');
    const [ amount, setAmount ] = useState(0);
    const ctx = useContext(UserContext);

    function validate(field, label) {
        if (!field || isNaN(amount) || (amount <= 0)) {
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
        return true;
    }
    
    function handleDeposit() {
        console.log(amount);
        if (!validate(amount, 'amount')) return;
        ctx.users[0].balance += parseInt(amount);
        setShow(false);
    }
    
    function clearForm(){
        setAmount(0);
        setShow(true);
    }

    return (
        <Card
            bgcolor="light"
            txtcolor="black"
            header="Deposit"
            status={status}
            body={show ? (
                <>
                Amount<br/>
                <input type="input" className="form-control" id="amount" placeholder="Enter Amount" value={amount} onChange={e => setAmount(e.currentTarget.value)} /><br/>
                <button type="submit" className="btn btn-light border-dark" onClick={handleDeposit}>Make a Deposit</button>
                </>
            ):(
                <>
                    <h5>Success!</h5>
                    <div>You have deposited {amount} to your account.</div>
                    <button type="submit" disabled={!amount} className="btn btn-light border-dark" onClick={clearForm}>Make Another Deposit</button>
                </>
            )}
            title="Deposit To Your Account"
        />
    );
}

export default Deposit;