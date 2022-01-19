import { React, createContext } from 'react';
import { Route, Link, HashRouter } from 'react-router-dom';

export function Card(props) {
    function classes() {
        const bg = props.bgcolor ? ' bg-' + props.bgcolor: ' ';
        const txt = props.txtcolor ? ' text-' + props.txtcolor: ' text-white';
        return 'card mb-3 ' + bg + txt;
    }
    return (
        <div className={classes()} style={{maxWidth: '18rem', backgroundColor: '#e3f2fd'}}>
            <div className="card-header">{props.header}</div>
            <div className="card-body">
                {props.title && (<h5 className="card-title">{props.title}</h5>)}
                {props.text && (<p className="card-text">{props.text}</p>)}
                {props.body}
                {props.status && (<div id='createStatus'>{props.status}</div>)}
            </div>
        </div>
    )
}

export const UserContext = createContext(null);

{/* <div className="card text-center text-dark mb-3 border-dark" style={{width: '18rem', backgroundColor: '#e3f2fd'}}>
<img src="..." className="card-img-top" alt="..." />
<div className="card-body">
    <h5 className="card-title">Bad Bank Home Screen</h5>
    <p className="card-text">{JSON.stringify(ctx)}</p>
    <div id="container">
        <Link to="/login/" className="btn btn-dark">Login</Link>
        <Link to="/createaccount/" className="btn btn-dark" style={{marginLeft: '5px'}}>Create an Account</Link>
    </div>
</div>
</div> */}