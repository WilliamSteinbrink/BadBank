import { React, useContext } from 'react';
import { UserContext, Card } from '../context';

const AllData = () => {
    const ctx = useContext(UserContext);
    return (
        <Card
            bgcolor="light"
            txtcolor="black"
            header="Badbank AllData"
            title="All Your Data"
            text={JSON.stringify(ctx)}
        />
    );
}

export default AllData;