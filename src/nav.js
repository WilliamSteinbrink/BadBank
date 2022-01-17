import { Link } from 'react-router-dom';
import bootstrap from 'bootstrap';

function Nav() {
    return (
        <div>
            <ul className="nav nav-tabs nav-justified">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>  
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/login/">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/balance/">Balance</Link>  
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/deposit/">Deposit</Link>  
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/withdraw/">Withdraw</Link>  
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/alldata/">All Data</Link>  
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/createaccount/">CreateAccount</Link>
                </li>
            </ul>
        </div>
    );
}

export default Nav;