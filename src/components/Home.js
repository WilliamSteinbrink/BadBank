import { React, useContext } from 'react'

const Home = () => {
    const ctx = useContext(UserContext);
    return (
        <div>
            <h3>Home Component<br/>
                {JSON.stringify(ctx)}
            </h3>
        </div>
    );
}

export default Home;