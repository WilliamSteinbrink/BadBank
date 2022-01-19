import { React, useContext } from 'react';
import { UserContext } from '../context';

const AllData = () => {
    const ctx = useContext(UserContext);
    return (
        <div>
            <h3>This is where AllData lives</h3>
            {JSON.stringify(ctx)}
        </div>
    );
}

export default AllData;