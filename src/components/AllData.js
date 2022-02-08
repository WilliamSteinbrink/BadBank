import { React, useContext } from 'react';
import { UserContext, Card } from '../context';

const AllData = () => {
    const ctx = useContext(UserContext);
    console.log(ctx);
    return (
        <>
            <Card
                bgcolor="light"
                txtcolor="black"
                header="Account Data For All Active Users"
                body={
                    <div className="table-responsive">
                        <table className="table table-striped table-hover table-bordered border-dark">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Password</th>
                                    <th scope="col">Balance</th>
                                </tr>
                            </thead>
                            <tbody>
                                {ctx.users.map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.password}</td>
                                        <td>{item.balance}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                }
            />
        </>
    );
}

export default AllData;