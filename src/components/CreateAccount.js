import { UserContext, Card } from '../context';
import { React, useContext, useState } from 'react';

function CreateAccount() {
    const [ show, setShow ] = useState(true);
    const [status, setStatus] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const ctx = useContext(UserContext);

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
                </>
            ):(
                <>

                </>
            )}
            title="Create An Account"
            text="Create an account with us"
        />
    );
}

export default CreateAccount;