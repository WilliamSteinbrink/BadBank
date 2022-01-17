import { useContext } from 'react';
import { UserContext } from './index';

function Products() {
    const ctx = useContext(UserContext);
    ctx.users.push(Math.random().toString(36).substr(2, 5));

    return (
        <div>
            <h3>Products</h3>
                <p>Buy my product!</p>
                {JSON.stringify(ctx.users)}
        </div>
    );
}

export default Products;