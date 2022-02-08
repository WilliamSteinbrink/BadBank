import { React } from 'react';
import { Card } from './context'

export default function Home(props) {
    return (
        <Card
            bgcolor="light"
            txtcolor="black"
            header="BadBank Home"
            title="Welcome to BadBank"
            text="Where nothing is secure."
            body={(<img src={props.bank} className="img-fluid" alt="Responsive image" />)}
            link1="/login/"
            name1="Login to your account"
            link2="/createaccount/"
            name2="New member? Create an account"
        />
    );
}