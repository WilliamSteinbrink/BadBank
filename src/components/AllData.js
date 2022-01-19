import { React, useContext } from 'react';
import { UserContext, Card } from '../context';

const AllData = () => {
    return (
        <Card
            bgcolor="light"
            txtcolor="black"
            header="Badbank AllData"
            title="All Your Data"
            text="All your data, all in one place"
        />
    );
}

export default AllData;