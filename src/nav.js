import { useContext } from 'react';
import { UserContext } from './index';

function Nav() {
    const ctx = useContext(UserContext);
    return (
        <div>
            <h3>Nav Component</h3>
            <p>{JSON.stringify(ctx.users)}</p>
        </div>
    );
}

export default Nav;