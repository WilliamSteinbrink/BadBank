import { useContext } from 'react';
import { UserContext } from './index';

function Home() {
    const ctx = useContext(UserContext);
    return (
        <div>
            <h3>Home Component</h3>
            <p>{JSON.stringify(ctx.users)}</p>
        </div>
    );
}

export default Home;