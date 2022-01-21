import { React } from 'react';
import { Card } from './context'

export default function Home() {
    return (
        <Card
            bgcolor="light"
            txtcolor="black"
            header="BadBank"
            title="Welcome to BadBank"
            text="Where nothing is secure."
            body={(<img src="./bank.png" className="img-fluid" alt="Responsive image" />)}
        />
    );
}