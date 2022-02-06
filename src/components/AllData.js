import { React, useContext } from 'react';
import { UserContext, Card } from '../context';

const AllData = () => {
    const ctx = useContext(UserContext);
    return (
        <Card
            bgcolor="light"
            txtcolor="black"
            header="Badbank AllData"
            title="Account Details"
            text={JSON.stringify(ctx.users[0].name)}
        />
    );
}

export default AllData;