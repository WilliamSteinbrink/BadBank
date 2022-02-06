import { UserContext, Card } from '../context';
import { React, useContext, useState } from 'react';

function CreateAccount() {
    const [ show, setShow ] = useState(true);
    const [status, setStatus] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const ctx = useContext(UserContext);

    function validate(field, label) {
        if (field === password && password.length < 8) {
            setStatus('Error: Password must be 8 characters or more.');
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
        if (!field) {
            setStatus('Error: ' + label);
            setTimeout(() => setStatus(''), 3000);
            return false;
        }
        return true;
    }
    
    function handleCreate() {
        console.log(name, email, password);
        if (!validate(name, 'Please enter a name')) return;
        if (!validate(email, 'Please enter an email address')) return;
        if (!validate(password, 'Please enter a valid password')) return;
        ctx.users.push({name, email, password, balance: 100});
        setShow(false);
    }
    
    function clearForm(){
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
    }

    return (
        <Card
            bgcolor="light"
            txtcolor="black"
            header="Badbank Account Creation"
            status={status}
            body={show ? (
                <>
                Name<br/>
                <input type="input" className="form-control" id="name" placeholder="Enter Name" value={name} onChange={e => setName(e.currentTarget.value)} /><br/>
                Email Address<br/>
                <input type="input" className="form-control" id="email" placeholder="Enter Email" value={email} onChange={e => setEmail(e.currentTarget.value)} /><br/>
                Password<br/>
                <input type="input" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)} /><br/>
                <button type="submit" className="btn btn-light border-dark" onClick={handleCreate}>Create Account</button>
                </>
            ):(
                <>
                    <h5>Success! Account created</h5>
                    <button type="submit" className="btn btn-light border-dark" onClick={clearForm}>Add another account</button>
                </>
            )}
            title="Create An Account"
            text="Create an account with us"
        />
    );
}

export default CreateAccount;